-- Dua Academy Database Schema

CREATE DATABASE IF NOT EXISTS dua_academy;
USE dua_academy;

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roll VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  surname VARCHAR(100) NOT NULL,
  gender VARCHAR(20) NOT NULL,
  dob DATE NOT NULL,
  cnic VARCHAR(20) NOT NULL,
  class VARCHAR(50) NOT NULL,
  past_school VARCHAR(200),
  whatsapp VARCHAR(20),
  photo TEXT,
  fee_image TEXT,
  payment_status VARCHAR(20) DEFAULT 'Pending',
  app_fee INT NOT NULL,
  payment_sender_number VARCHAR(20),
  father_name VARCHAR(100) NOT NULL,
  father_surname VARCHAR(100) NOT NULL,
  father_cnic VARCHAR(20) NOT NULL,
  father_occupation VARCHAR(100),
  txn_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_roll (roll),
  INDEX idx_payment_status (payment_status)
);

-- Marks/Results Table
CREATE TABLE IF NOT EXISTS marks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roll VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  class VARCHAR(50) NOT NULL,
  urdu INT DEFAULT 0,
  english INT DEFAULT 0,
  math INT DEFAULT 0,
  science INT DEFAULT 0,
  islamiyat INT DEFAULT 0,
  social INT DEFAULT 0,
  total INT DEFAULT 0,
  percentage DECIMAL(5,2) DEFAULT 0.00,
  grade VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_roll (roll),
  FOREIGN KEY (roll) REFERENCES applications(roll) ON DELETE CASCADE
);

-- Teachers Table
CREATE TABLE IF NOT EXISTS teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  photo TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image TEXT NOT NULL,
  title VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Settings Table (for storing roll counter, etc.)
CREATE TABLE IF NOT EXISTS settings (
  setting_key VARCHAR(50) PRIMARY KEY,
  setting_value TEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default roll counter
INSERT INTO settings (setting_key, setting_value) VALUES ('next_roll', '801') 
ON DUPLICATE KEY UPDATE setting_value = setting_value;
