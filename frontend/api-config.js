// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// API Helper Functions
const API = {
  // Applications
  async getNextRoll() {
    const response = await fetch(`${API_BASE_URL}/applications/next-roll`);
    return await response.json();
  },

  async getAllApplications() {
    const response = await fetch(`${API_BASE_URL}/applications`);
    return await response.json();
  },

  async getApplication(roll) {
    const response = await fetch(`${API_BASE_URL}/applications/${roll}`);
    return await response.json();
  },

  async createApplication(data) {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async updateApplication(roll, data) {
    const response = await fetch(`${API_BASE_URL}/applications/${roll}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async deleteApplication(roll) {
    const response = await fetch(`${API_BASE_URL}/applications/${roll}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  // Marks
  async getAllMarks() {
    const response = await fetch(`${API_BASE_URL}/marks`);
    return await response.json();
  },

  async getMarks(roll) {
    const response = await fetch(`${API_BASE_URL}/marks/${roll}`);
    return await response.json();
  },

  async saveMarks(data) {
    const response = await fetch(`${API_BASE_URL}/marks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async deleteMarks(roll) {
    const response = await fetch(`${API_BASE_URL}/marks/${roll}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  // Teachers
  async getAllTeachers() {
    const response = await fetch(`${API_BASE_URL}/teachers`);
    return await response.json();
  },

  async createTeacher(data) {
    const response = await fetch(`${API_BASE_URL}/teachers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async updateTeacher(id, data) {
    const response = await fetch(`${API_BASE_URL}/teachers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async deleteTeacher(id) {
    const response = await fetch(`${API_BASE_URL}/teachers/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  // Health Check
  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  }
};
