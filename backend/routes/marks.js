const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all marks
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM marks ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching marks:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch marks' });
  }
});

// Get marks by roll number
router.get('/:roll', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM marks WHERE roll = ?', [req.params.roll]);
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Marks not found' });
    }
    
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching marks:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch marks' });
  }
});

// Create or update marks
router.post('/', async (req, res) => {
  try {
    const {
      roll, name, class: className,
      urdu, english, math, science, islamiyat, social
    } = req.body;

    // Validate required fields
    if (!roll || !name || !className) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Calculate total, percentage, and grade
    const subjects = [
      parseInt(urdu) || 0,
      parseInt(english) || 0,
      parseInt(math) || 0,
      parseInt(science) || 0,
      parseInt(islamiyat) || 0,
      parseInt(social) || 0
    ];
    
    const total = subjects.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / 600) * 100;
    
    let grade = 'F';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';
    else if (percentage >= 40) grade = 'E';

    // Check if marks already exist
    const [existing] = await db.query('SELECT id FROM marks WHERE roll = ?', [roll]);
    
    if (existing.length > 0) {
      // Update existing marks
      const query = `
        UPDATE marks 
        SET name = ?, class = ?, urdu = ?, english = ?, math = ?, 
            science = ?, islamiyat = ?, social = ?, total = ?, 
            percentage = ?, grade = ?
        WHERE roll = ?
      `;
      
      await db.query(query, [
        name, className, urdu, english, math, science, islamiyat, social,
        total, percentage.toFixed(2), grade, roll
      ]);
      
      res.json({ success: true, message: 'Marks updated successfully', data: { roll, total, percentage, grade } });
    } else {
      // Insert new marks
      const query = `
        INSERT INTO marks 
        (roll, name, class, urdu, english, math, science, islamiyat, social, total, percentage, grade)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      const [result] = await db.query(query, [
        roll, name, className, urdu, english, math, science, islamiyat, social,
        total, percentage.toFixed(2), grade
      ]);
      
      res.status(201).json({ 
        success: true, 
        message: 'Marks created successfully',
        data: { id: result.insertId, roll, total, percentage, grade }
      });
    }
  } catch (error) {
    console.error('Error saving marks:', error);
    res.status(500).json({ success: false, message: 'Failed to save marks' });
  }
});

// Delete marks
router.delete('/:roll', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM marks WHERE roll = ?', [req.params.roll]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Marks not found' });
    }
    
    res.json({ success: true, message: 'Marks deleted successfully' });
  } catch (error) {
    console.error('Error deleting marks:', error);
    res.status(500).json({ success: false, message: 'Failed to delete marks' });
  }
});

module.exports = router;
