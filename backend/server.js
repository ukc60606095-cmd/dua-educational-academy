const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const applicationsRouter = require('./routes/applications');
const marksRouter = require('./routes/marks');
const teachersRouter = require('./routes/teachers');

// API routes
app.use('/api/applications', applicationsRouter);
app.use('/api/marks', marksRouter);
app.use('/api/teachers', teachersRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Dua Academy Backend API is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Dua Educational Academy - Backend API',
    version: '1.0.0',
    endpoints: {
      applications: '/api/applications',
      marks: '/api/marks',
      teachers: '/api/teachers',
      health: '/api/health'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║   Dua Educational Academy - Backend Server        ║
║   Server running on http://localhost:${PORT}       ║
║   API Documentation: http://localhost:${PORT}/api  ║
╚═══════════════════════════════════════════════════╝
  `);
});

module.exports = app;
