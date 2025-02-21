# Todo API

## Introduction
This is a simple Todo API built using Express.js. It provides endpoints to manage todos, including CRUD operations, search, and pagination.

## API Endpoints

### Get All Todos
```http
GET /api/todos/
```
Response:
```json
{
  "success": true,
  "message": "berhasil get all todos",
  "data": [...]
}
```

### Get Todos with Pagination
```http
GET /api/todos/pagination?page=1&limit=5
```
Response:
```json
{
  "success": true,
  "message": "berhasil get pagination todo",
  "data": [...],
  "pagination": {
    "page": 1,
    "totalTodo": 20,
    "totalPages": 4
  }
}
```

### Get a Single Todo
```http
GET /api/todos/:id
```
Response:
```json
{
  "success": true,
  "message": "berhasil get todo",
  "data": { ... }
}
```

### Search Todo by Title
```http
GET /api/todos/search?q=example
```
Response:
```json
{
  "success": true,
  "message": "berhasil search todo",
  "data": [...]
}
```

### Create a New Todo
```http
POST /api/todos/
Content-Type: application/json
```
Body:
```json
{
  "title": "New Todo",
  "completed": false
}
```
Response:
```json
{
  "success": true,
  "message": "berhasil create todo",
  "data": { ... }
}
```

### Update a Todo
```http
PATCH /api/todos/:id
Content-Type: application/json
```
Body:
```json
{
  "title": "Updated Todo",
  "completed": true
}
```
Response:
```json
{
  "success": true,
  "message": "berhasil update todo",
  "data": { ... }
}
```

### Delete a Todo
```http
DELETE /api/todos/:id
```
Response:
```json
{
  "success": true,
  "message": "berhasil delete todo",
  "data": { "id": 1 }
}
```

## Middleware
- `validateRequest`: Validates the request payload before creating or updating a todo.

## Error Handling
Errors are handled uniformly using `handleError` and `handleSuccess` utility functions to ensure consistent API responses.


