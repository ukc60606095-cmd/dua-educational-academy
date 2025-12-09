# Dua Educational Academy - Backend API

Backend server for Dua Educational Academy portal with MySQL database integration.

## Features

- **Student Applications Management**: Create, read, update, and delete student applications
- **Marks/Results System**: Store and retrieve student exam results
- **Teachers Management**: Manage teacher profiles and information
- **Payment Tracking**: Track payment status and transaction details
- **Roll Number Generation**: Automatic roll number generation system

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure database:
   - Create a MySQL database named `dua_academy`
   - Import the schema:
   ```bash
   mysql -u root -p dua_academy < schema.sql
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update database credentials in `.env`

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Applications
- `GET /api/applications` - Get all applications
- `GET /api/applications/:roll` - Get application by roll number
- `POST /api/applications` - Create new application
- `PUT /api/applications/:roll` - Update application
- `DELETE /api/applications/:roll` - Delete application
- `GET /api/applications/next-roll` - Get next roll number

### Marks/Results
- `GET /api/marks` - Get all marks
- `GET /api/marks/:roll` - Get marks by roll number
- `POST /api/marks` - Create or update marks
- `DELETE /api/marks/:roll` - Delete marks

### Teachers
- `GET /api/teachers` - Get all teachers
- `GET /api/teachers/:id` - Get teacher by ID
- `POST /api/teachers` - Create new teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher

### Health Check
- `GET /api/health` - Check API status

## Database Schema

The database includes the following tables:
- `applications` - Student application data
- `marks` - Student exam results
- `teachers` - Teacher information
- `gallery` - Image gallery
- `settings` - System settings (roll counter, etc.)

## Environment Variables

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=dua_academy
PORT=5000
MAX_FILE_SIZE=10485760
```

## Default Configuration

- Server Port: 5000
- Database: dua_academy
- Starting Roll Number: 801
- Max File Size: 10MB

## Error Handling

All endpoints return JSON responses with the following structure:

Success:
```json
{
  "success": true,
  "data": {...},
  "message": "Operation successful"
}
```

Error:
```json
{
  "success": false,
  "message": "Error description"
}
```

## License

ISC
