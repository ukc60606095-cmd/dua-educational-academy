const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all teachers
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM teachers ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch teachers' });
  }
});

// Get teacher by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM teachers WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }
    
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching teacher:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch teacher' });
  }
});

// Create new teacher
router.post('/', async (req, res) => {
  try {
    const { name, subject, photo } = req.body;

    if (!name || !subject) {
      return res.status(400).json({ success: false, message: 'Name and subject are required' });
    }

    const query = 'INSERT INTO teachers (name, subject, photo) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [name, subject, photo || null]);
    
    res.status(201).json({ 
      success: true, 
      message: 'Teacher created successfully',
      data: { id: result.insertId, name, subject }
    });
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({ success: false, message: 'Failed to create teacher' });
  }
});

// Update teacher
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ success: false, message: 'No fields to update' });
    }

    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updates), id];
    
    const query = `UPDATE teachers SET ${fields} WHERE id = ?`;
    const [result] = await db.query(query, values);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }
    
    res.json({ success: true, message: 'Teacher updated successfully' });
  } catch (error) {
    console.error('Error updating teacher:', error);
    res.status(500).json({ success: false, message: 'Failed to update teacher' });
  }
});

// Delete teacher
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM teachers WHERE id = ?', [req.params.id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }
    
    res.json({ success: true, message: 'Teacher deleted successfully' });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    res.status(500).json({ success: false, message: 'Failed to delete teacher' });
  }
});

module.exports = router;
