# Dua Academy API Documentation

Base URL: `http://localhost:5000`

## Authentication
Currently, no authentication is required. Add authentication middleware as needed for production.

---

## Applications API

### Get Next Roll Number
Generate the next available roll number.

**Endpoint:** `GET /api/applications/next-roll`

**Response:**
```json
{
  "success": true,
  "roll": "801"
}
```

---

### Get All Applications
Retrieve all student applications.

**Endpoint:** `GET /api/applications`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "roll": "801",
      "name": "Ahmed",
      "surname": "Khan",
      "gender": "Male",
      "dob": "2010-05-15",
      "cnic": "12345-6789012-3",
      "class": "Class 8",
      "past_school": "ABC School",
      "whatsapp": "03001234567",
      "photo": "base64_encoded_image",
      "fee_image": "base64_encoded_image",
      "payment_status": "Approved",
      "app_fee": 1000,
      "payment_sender_number": "03009876543",
      "father_name": "Muhammad",
      "father_surname": "Khan",
      "father_cnic": "12345-6789012-1",
      "father_occupation": "Business",
      "txn_id": "TXN123456",
      "created_at": "2024-01-01T10:00:00.000Z",
      "updated_at": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

---

### Get Application by Roll Number
Retrieve a specific application.

**Endpoint:** `GET /api/applications/:roll`

**Parameters:**
- `roll` (path parameter) - Student roll number

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "roll": "801",
    "name": "Ahmed",
    ...
  }
}
```

---

### Create Application
Submit a new student application.

**Endpoint:** `POST /api/applications`

**Request Body:**
```json
{
  "roll": "801",
  "name": "Ahmed",
  "surname": "Khan",
  "gender": "Male",
  "dob": "2010-05-15",
  "cnic": "12345-6789012-3",
  "class": "Class 8",
  "past_school": "ABC School",
  "whatsapp": "03001234567",
  "photo": "base64_encoded_image",
  "fee_image": "base64_encoded_image",
  "payment_status": "Pending",
  "app_fee": 1000,
  "payment_sender_number": "03009876543",
  "father_name": "Muhammad",
  "father_surname": "Khan",
  "father_cnic": "12345-6789012-1",
  "father_occupation": "Business",
  "txn_id": "TXN123456"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application created successfully",
  "data": {
    "id": 1,
    "roll": "801"
  }
}
```

---

### Update Application
Update an existing application.

**Endpoint:** `PUT /api/applications/:roll`

**Parameters:**
- `roll` (path parameter) - Student roll number

**Request Body:** (Include only fields to update)
```json
{
  "payment_status": "Approved",
  "txn_id": "TXN789012"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application updated successfully"
}
```

---

### Delete Application
Delete an application.

**Endpoint:** `DELETE /api/applications/:roll`

**Parameters:**
- `roll` (path parameter) - Student roll number

**Response:**
```json
{
  "success": true,
  "message": "Application deleted successfully"
}
```

---

## Marks API

### Get All Marks
Retrieve all student marks.

**Endpoint:** `GET /api/marks`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "roll": "801",
      "name": "Ahmed Khan",
      "class": "Class 8",
      "urdu": 85,
      "english": 90,
      "math": 88,
      "science": 92,
      "islamiyat": 95,
      "social": 87,
      "total": 537,
      "percentage": "89.50",
      "grade": "A",
      "created_at": "2024-01-01T10:00:00.000Z",
      "updated_at": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

---

### Get Marks by Roll Number
Retrieve marks for a specific student.

**Endpoint:** `GET /api/marks/:roll`

**Parameters:**
- `roll` (path parameter) - Student roll number

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "roll": "801",
    "name": "Ahmed Khan",
    "class": "Class 8",
    "urdu": 85,
    "english": 90,
    "math": 88,
    "science": 92,
    "islamiyat": 95,
    "social": 87,
    "total": 537,
    "percentage": "89.50",
    "grade": "A"
  }
}
```

---

### Create or Update Marks
Add or update student marks. Automatically calculates total, percentage, and grade.

**Endpoint:** `POST /api/marks`

**Request Body:**
```json
{
  "roll": "801",
  "name": "Ahmed Khan",
  "class": "Class 8",
  "urdu": 85,
  "english": 90,
  "math": 88,
  "science": 92,
  "islamiyat": 95,
  "social": 87
}
```

**Response:**
```json
{
  "success": true,
  "message": "Marks created successfully",
  "data": {
    "id": 1,
    "roll": "801",
    "total": 537,
    "percentage": 89.5,
    "grade": "A"
  }
}
```

**Grade Calculation:**
- A+: 90-100%
- A: 80-89%
- B: 70-79%
- C: 60-69%
- D: 50-59%
- E: 40-49%
- F: Below 40%

---

### Delete Marks
Delete marks for a student.

**Endpoint:** `DELETE /api/marks/:roll`

**Parameters:**
- `roll` (path parameter) - Student roll number

**Response:**
```json
{
  "success": true,
  "message": "Marks deleted successfully"
}
```

---

## Teachers API

### Get All Teachers
Retrieve all teachers.

**Endpoint:** `GET /api/teachers`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Fatima Ahmed",
      "subject": "Mathematics",
      "photo": "base64_encoded_image",
      "created_at": "2024-01-01T10:00:00.000Z",
      "updated_at": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

---

### Get Teacher by ID
Retrieve a specific teacher.

**Endpoint:** `GET /api/teachers/:id`

**Parameters:**
- `id` (path parameter) - Teacher ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Fatima Ahmed",
    "subject": "Mathematics",
    "photo": "base64_encoded_image"
  }
}
```

---

### Create Teacher
Add a new teacher.

**Endpoint:** `POST /api/teachers`

**Request Body:**
```json
{
  "name": "Fatima Ahmed",
  "subject": "Mathematics",
  "photo": "base64_encoded_image"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Teacher created successfully",
  "data": {
    "id": 1,
    "name": "Fatima Ahmed",
    "subject": "Mathematics"
  }
}
```

---

### Update Teacher
Update teacher information.

**Endpoint:** `PUT /api/teachers/:id`

**Parameters:**
- `id` (path parameter) - Teacher ID

**Request Body:** (Include only fields to update)
```json
{
  "subject": "Advanced Mathematics"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Teacher updated successfully"
}
```

---

### Delete Teacher
Delete a teacher.

**Endpoint:** `DELETE /api/teachers/:id`

**Parameters:**
- `id` (path parameter) - Teacher ID

**Response:**
```json
{
  "success": true,
  "message": "Teacher deleted successfully"
}
```

---

## Health Check

### Check API Status
Verify that the API is running.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "success": true,
  "message": "Dua Academy Backend API is running",
  "timestamp": "2024-01-01T10:00:00.000Z"
}
```

---

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "success": false,
  "message": "Error description"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

---

## Notes

1. **Image Storage**: Images are stored as base64-encoded strings in the database. For production, consider using cloud storage (AWS S3, Cloudinary, etc.).

2. **File Size Limit**: Request body size is limited to 50MB to accommodate base64-encoded images.

3. **CORS**: CORS is enabled for all origins. Configure appropriately for production.

4. **Database**: Ensure MySQL is running and the database schema is imported before starting the server.

5. **Roll Numbers**: Roll numbers are auto-generated starting from 801 and increment automatically.
