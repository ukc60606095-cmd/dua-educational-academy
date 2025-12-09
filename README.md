# Dua Educational Academy Portal

Complete educational portal system with frontend and backend for managing student applications, results, and admission slips.

## 📁 Project Structure

```
dua-academy/
├── frontend/           # Frontend application
│   ├── index.html                  # Original standalone version
│   ├── index-with-backend.html     # Backend integrated version
│   ├── api-config.js               # API configuration
│   └── README.md                   # Frontend documentation
│
└── backend/            # Backend API server
    ├── server.js                   # Main server file
    ├── schema.sql                  # Database schema
    ├── package.json                # Dependencies
    ├── .env.example                # Environment variables template
    ├── config/
    │   └── db.js                   # Database configuration
    ├── routes/
    │   ├── applications.js         # Applications API
    │   ├── marks.js                # Marks/Results API
    │   └── teachers.js             # Teachers API
    ├── API_DOCUMENTATION.md        # Complete API documentation
    └── README.md                   # Backend documentation
```

## 🚀 Features

### Student Features
- ✅ Online application submission
- ✅ Upload student photo and payment screenshot
- ✅ Generate admission slip after payment approval
- ✅ Check exam results online
- ✅ View teacher information

### Admin Features
- ✅ View all applications
- ✅ Approve/reject payments
- ✅ Manage student marks
- ✅ Manage teacher profiles
- ✅ Track application status

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Modern gradient design)
- Vanilla JavaScript
- Fetch API for backend communication

### Backend
- Node.js
- Express.js
- MySQL Database
- CORS enabled
- RESTful API architecture

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create MySQL database:
```bash
mysql -u root -p
CREATE DATABASE dua_academy;
exit
```

4. Import database schema:
```bash
mysql -u root -p dua_academy < schema.sql
```

5. Configure environment variables:
```bash
cp .env.example .env
# Edit .env file with your database credentials
```

6. Start the server:
```bash
npm start
```

Server will run on `http://localhost:5000`

### Frontend Setup

#### Option 1: Standalone Version (No Backend Required)
Simply open `frontend/index.html` in a web browser.

#### Option 2: Backend Integrated Version
1. Ensure backend server is running
2. Open `frontend/index-with-backend.html` in a web browser
3. The frontend will automatically connect to the backend API

## 📚 API Documentation

Complete API documentation is available in `backend/API_DOCUMENTATION.md`

### Quick API Reference

**Base URL:** `http://localhost:5000/api`

#### Applications
- `GET /applications` - Get all applications
- `POST /applications` - Create new application
- `GET /applications/:roll` - Get application by roll
- `PUT /applications/:roll` - Update application
- `DELETE /applications/:roll` - Delete application

#### Marks
- `GET /marks` - Get all marks
- `POST /marks` - Create/update marks
- `GET /marks/:roll` - Get marks by roll

#### Teachers
- `GET /teachers` - Get all teachers
- `POST /teachers` - Create teacher
- `PUT /teachers/:id` - Update teacher

## 🗄️ Database Schema

### Tables
1. **applications** - Student application data
2. **marks** - Student exam results
3. **teachers** - Teacher information
4. **gallery** - Image gallery
5. **settings** - System settings

See `backend/schema.sql` for complete schema.

## 🔒 Security Notes

⚠️ **Important for Production:**

1. Add authentication middleware for admin routes
2. Implement JWT or session-based authentication
3. Validate and sanitize all user inputs
4. Use environment variables for sensitive data
5. Enable HTTPS in production
6. Implement rate limiting
7. Add CSRF protection
8. Use prepared statements (already implemented)

## 🚀 Deployment

### Backend Deployment Options
- Heroku
- Railway
- DigitalOcean
- AWS EC2
- Google Cloud Platform

### Frontend Deployment Options
- GitHub Pages (standalone version)
- Netlify
- Vercel
- Firebase Hosting
- Or serve from backend as static files

### Production Checklist
- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Update API_BASE_URL in frontend
- [ ] Enable HTTPS
- [ ] Set up database backups
- [ ] Implement authentication
- [ ] Add logging and monitoring
- [ ] Optimize images and assets

## 📖 Usage Guide

### For Students

1. **Apply for Admission:**
   - Fill out the application form
   - Upload your photo
   - Upload payment screenshot
   - Submit and note your roll number

2. **Check Admission Slip:**
   - Go to "Slip" section
   - Enter your roll number
   - View and print your slip (after payment approval)

3. **Check Results:**
   - Go to "Result" section
   - Enter your roll number
   - View your marks and grade

### For Admins

1. **Approve Applications:**
   - Go to "Admin" section
   - Click "Load All Applications"
   - Review payment screenshots
   - Click "Approve" for verified payments

2. **Add Results:**
   - Use the marks API to add student results
   - Results will be automatically calculated

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

ISC License

## 👥 Support

For issues and questions:
- Create an issue on GitHub
- Contact: Dua Educational Academy, Kamoon Shaheed

## 🎓 About

This portal is designed for Dua Educational Academy in Kamoon Shaheed to streamline the student admission process, manage records, and provide online access to results and admission slips.

---

**Made with ❤️ for Dua Educational Academy**
