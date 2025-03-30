# Task Management Application

A full-stack task management application built with Next.js, Express, and SQLite.

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed/incomplete
- Modern and responsive UI
- Real-time updates
- Error handling and validation

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database: SQLite

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd algotask
```

2. Install dependencies:
```bash
npm install
```

3. Start the development servers:

In one terminal (backend):
```bash
npm run server
```

In another terminal (frontend):
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3005

## API Documentation

### Endpoints

#### GET /tasks
Retrieve all tasks.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
  }
]
```

#### POST /tasks
Create a new task.

**Request Body:**
```json
{
  "title": "Task Title",
  "description": "Task Description"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task Description",
  "completed": false
}
```

#### PUT /tasks/:id
Update an existing task.

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": true
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": true
}
```

#### DELETE /tasks/:id
Delete a task.

**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

### Testing with Postman

1. Create a new collection in Postman
2. Add the following requests:

#### Get All Tasks
- Method: GET
- URL: http://localhost:3005/tasks

#### Create Task
- Method: POST
- URL: http://localhost:3005/tasks
- Body (raw JSON):
```json
{
  "title": "Test Task",
  "description": "This is a test task"
}
```

#### Update Task
- Method: PUT
- URL: http://localhost:3005/tasks/1
- Body (raw JSON):
```json
{
  "title": "Updated Test Task",
  "description": "This is an updated test task",
  "completed": true
}
```

#### Delete Task
- Method: DELETE
- URL: http://localhost:3005/tasks/1

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error responses include a message explaining the error:
```json
{
  "error": "Error message"
}
```

## Screenshots

![Screenshot 2025-03-30 192732](https://github.com/user-attachments/assets/ce6018b2-1ea8-4238-80cc-1910e2841d86)

![Screenshot 2025-03-30 192752](https://github.com/user-attachments/assets/796000ed-b3c2-4f42-84f2-0794cf833f1f)

![Screenshot 2025-03-30 192814](https://github.com/user-attachments/assets/e3180f4a-a6f7-40cd-954d-0acac65b41be)





## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
