# 🚀 Quick Start Guide - Dua Educational Academy

## تیزی سے شروع کریں (Urdu)

### Backend شروع کرنے کے لیے:

1. **MySQL Install کریں:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install mysql-server

# Start MySQL service
sudo systemctl start mysql
```

2. **Database بنائیں:**
```bash
mysql -u root -p
CREATE DATABASE dua_academy;
exit
```

3. **Schema Import کریں:**
```bash
cd backend
mysql -u root -p dua_academy < schema.sql
```

4. **Dependencies Install کریں:**
```bash
npm install
```

5. **Environment Variables سیٹ کریں:**
```bash
# .env file میں اپنا database password ڈالیں
nano .env
```

6. **Server شروع کریں:**
```bash
npm start
```

### Frontend استعمال کرنے کے لیے:

**آسان طریقہ (بغیر Backend):**
- `frontend/index.html` کو browser میں کھولیں

**Backend کے ساتھ:**
- Backend server شروع کریں
- `frontend/index-with-backend.html` کو browser میں کھولیں

---

## Quick Start (English)

### To Start Backend:

1. **Install MySQL:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install mysql-server

# macOS
brew install mysql

# Windows
Download from: https://dev.mysql.com/downloads/installer/
```

2. **Create Database:**
```bash
mysql -u root -p
CREATE DATABASE dua_academy;
exit
```

3. **Import Schema:**
```bash
cd backend
mysql -u root -p dua_academy < schema.sql
```

4. **Install Dependencies:**
```bash
npm install
```

5. **Configure Environment:**
```bash
cp .env.example .env
# Edit .env file with your database credentials
nano .env
```

Example `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=dua_academy
PORT=5000
```

6. **Start Server:**
```bash
npm start
```

You should see:
```
╔═══════════════════════════════════════════════════╗
║   Dua Educational Academy - Backend Server        ║
║   Server running on http://localhost:5000       ║
╚═══════════════════════════════════════════════════╝
✅ Database connected successfully
```

### To Use Frontend:

**Simple Way (No Backend Required):**
1. Open `frontend/index.html` in your browser
2. Data will be stored in browser's localStorage

**With Backend:**
1. Make sure backend server is running
2. Open `frontend/index-with-backend.html` in your browser
3. Data will be stored in MySQL database

---

## 🧪 Testing the System

### Test Backend API:

1. **Health Check:**
```bash
curl http://localhost:5000/api/health
```

2. **Get Next Roll Number:**
```bash
curl http://localhost:5000/api/applications/next-roll
```

3. **Create Test Application:**
```bash
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "roll": "801",
    "name": "Ahmed",
    "surname": "Khan",
    "gender": "Male",
    "dob": "2010-05-15",
    "cnic": "12345-6789012-3",
    "class": "Class 8",
    "app_fee": 1000,
    "father_name": "Muhammad",
    "father_surname": "Khan",
    "father_cnic": "12345-6789012-1",
    "payment_status": "Pending"
  }'
```

### Test Frontend:

1. Open frontend in browser
2. Fill application form
3. Submit and note the roll number
4. Go to Admin panel
5. Approve the payment
6. Check slip with roll number

---

## 📱 Common Issues & Solutions

### Issue: Database connection failed
**Solution:**
- Check if MySQL is running: `sudo systemctl status mysql`
- Verify credentials in `.env` file
- Make sure database exists: `mysql -u root -p -e "SHOW DATABASES;"`

### Issue: Port 5000 already in use
**Solution:**
- Change PORT in `.env` file
- Or stop the process using port 5000: `sudo lsof -ti:5000 | xargs kill -9`

### Issue: Frontend can't connect to backend
**Solution:**
- Check if backend is running
- Verify API_BASE_URL in frontend matches backend URL
- Check browser console for CORS errors

### Issue: npm install fails
**Solution:**
- Update npm: `npm install -g npm@latest`
- Clear cache: `npm cache clean --force`
- Delete node_modules and try again

---

## 🎯 Next Steps

1. **Add Authentication:**
   - Implement admin login system
   - Protect admin routes

2. **Deploy to Production:**
   - Deploy backend to Heroku/Railway
   - Deploy frontend to Netlify/Vercel
   - Update API_BASE_URL

3. **Add More Features:**
   - Email notifications
   - SMS alerts
   - Fee payment integration
   - Attendance system

4. **Optimize:**
   - Add image compression
   - Implement caching
   - Add pagination
   - Optimize database queries

---

## 📞 Support

For help:
- Check README.md for detailed documentation
- Check API_DOCUMENTATION.md for API details
- Create an issue on GitHub

---

**Happy Coding! 🎉**
