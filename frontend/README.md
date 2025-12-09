# Dua Educational Academy - Frontend

Frontend application for Dua Educational Academy portal.

## Files

### 1. `index.html`
Original frontend file using localStorage for data storage. Works standalone without backend.

### 2. `index-with-backend.html`
Updated frontend integrated with backend API. Requires backend server to be running.

### 3. `api-config.js`
API configuration and helper functions for backend integration.

## Features

- **Student Application Form**: Submit new student applications
- **Admission Slip Generation**: Generate and view admission slips
- **Result Checking**: Check student exam results
- **Admin Panel**: Manage applications and approve payments

## Usage

### Standalone Version (index.html)
Simply open `index.html` in a web browser. Data is stored in browser's localStorage.

### Backend Integrated Version (index-with-backend.html)

1. Start the backend server first:
```bash
cd ../backend
npm start
```

2. Open `index-with-backend.html` in a web browser

3. The frontend will automatically connect to the backend API at `http://localhost:5000`

## Configuration

To change the backend API URL, edit the `API_BASE_URL` constant in `index-with-backend.html`:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

For production, update this to your deployed backend URL.

## Browser Compatibility

- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- Mobile browsers: ✅ Responsive design

## Features Comparison

| Feature | Standalone (index.html) | Backend Integrated |
|---------|------------------------|-------------------|
| Data Storage | localStorage | MySQL Database |
| Multi-device Access | ❌ No | ✅ Yes |
| Data Persistence | Browser only | Server database |
| File Upload | Base64 in localStorage | Base64 in database |
| Admin Features | Limited | Full featured |

## Notes

1. **Images**: Both versions store images as base64-encoded strings. For production with large files, consider using cloud storage.

2. **CORS**: The backend integrated version requires CORS to be enabled on the backend server.

3. **File Size**: Large image files may cause performance issues. Consider compressing images before upload.

4. **Security**: The admin panel has no authentication. Add proper authentication for production use.

## Deployment

### Static Hosting (Standalone Version)
Deploy `index.html` to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### Full Stack Deployment (Backend Integrated)
1. Deploy backend to a Node.js hosting service (Heroku, Railway, DigitalOcean, etc.)
2. Update `API_BASE_URL` in frontend to point to deployed backend
3. Deploy frontend to static hosting or serve from backend

## License

ISC
