const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get next roll number
router.get('/next-roll', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT setting_value FROM settings WHERE setting_key = ?', ['next_roll']);
    const nextRoll = rows[0]?.setting_value || '801';
    
    // Increment for next time
    await db.query('UPDATE settings SET setting_value = ? WHERE setting_key = ?', 
      [String(parseInt(nextRoll) + 1), 'next_roll']);
    
    res.json({ success: true, roll: nextRoll });
  } catch (error) {
    console.error('Error getting next roll:', error);
    res.status(500).json({ success: false, message: 'Failed to generate roll number' });
  }
});

// Get all applications
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM applications ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch applications' });
  }
});

// Get application by roll number
router.get('/:roll', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM applications WHERE roll = ?', [req.params.roll]);
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch application' });
  }
});

// Create new application
router.post('/', async (req, res) => {
  try {
    const {
      roll, name, surname, gender, dob, cnic, class: className,
      past_school, whatsapp, photo, fee_image, payment_status,
      app_fee, payment_sender_number, father_name, father_surname,
      father_cnic, father_occupation, txn_id
    } = req.body;

    // Validate required fields
    if (!roll || !name || !surname || !gender || !dob || !cnic || !className || 
        !app_fee || !father_name || !father_surname || !father_cnic) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const query = `
      INSERT INTO applications 
      (roll, name, surname, gender, dob, cnic, class, past_school, whatsapp, 
       photo, fee_image, payment_status, app_fee, payment_sender_number, 
       father_name, father_surname, father_cnic, father_occupation, txn_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      roll, name, surname, gender, dob, cnic, className, past_school || null,
      whatsapp || null, photo || null, fee_image || null, payment_status || 'Pending',
      app_fee, payment_sender_number || null, father_name, father_surname,
      father_cnic, father_occupation || null, txn_id || null
    ];

    const [result] = await db.query(query, values);
    
    res.status(201).json({ 
      success: true, 
      message: 'Application created successfully',
      data: { id: result.insertId, roll }
    });
  } catch (error) {
    console.error('Error creating application:', error);
    
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'Roll number already exists' });
    }
    
    res.status(500).json({ success: false, message: 'Failed to create application' });
  }
});

// Update application
router.put('/:roll', async (req, res) => {
  try {
    const { roll } = req.params;
    const updates = req.body;
    
    // Remove roll from updates to prevent modification
    delete updates.roll;
    
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ success: false, message: 'No fields to update' });
    }

    // Build dynamic update query
    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updates), roll];
    
    const query = `UPDATE applications SET ${fields} WHERE roll = ?`;
    const [result] = await db.query(query, values);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    
    res.json({ success: true, message: 'Application updated successfully' });
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({ success: false, message: 'Failed to update application' });
  }
});

// Delete application
router.delete('/:roll', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM applications WHERE roll = ?', [req.params.roll]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    
    res.json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({ success: false, message: 'Failed to delete application' });
  }
});

module.exports = router;
