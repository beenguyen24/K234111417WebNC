# Exercise 50: Book Management System with RESTful API

## Overview
This exercise implements a complete Book Management System with a modern UI/UX using Angular and a RESTful API backend using Node.js/Express.

## Features
- 📚 **View All Books**: Display complete list of books with details
- ➕ **Create Books**: Add new books with full details
- ✏️ **Edit Books**: Modify existing book information
- 📖 **View Details**: See complete book information in a detail view
- 🗑️ **Delete Books**: Remove books with confirmation
- 🖼️ **Image Handling**: Display book images with fallback, support URL or local file upload (processed to Base64)
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX**: Clean, intuitive interface with smooth animations

## Book Data Structure
Each book contains the following information:
```typescript
{
  id: string;           // Unique identifier (auto-generated)
  title: string;        // Book title
  author: string;       // Author name
  description: string;  // Book description
  price: number;        // Price in VND
  image: string;        // Image URL
  publishedDate: string;// Publication date (YYYY-MM-DD)
  pages: number;        // Number of pages
  category: string;     // Book category (Technology, Science, Fiction, etc.)
}
```

## REST API Endpoints

### Base URL: `http://localhost:3000/api/books`

### 1. GET All Books
**Endpoint**: `GET /api/books`
**Response**: Array of all books
```json
[
  {
    "id": "b1",
    "title": "Kỹ thuật lập trình cơ bản",
    "author": "Nguyễn Văn A",
    ...
  }
]
```

### 2. GET Book by ID
**Endpoint**: `GET /api/books/:id`
**Response**: Single book object
```json
{
  "id": "b1",
  "title": "Kỹ thuật lập trình cơ bản",
  ...
}
```
**Usage in UI**: Button `Details` calls this endpoint to load latest detail data by `id`.

### 3. CREATE Book
**Endpoint**: `POST /api/books`
**Request Body**:
```json
{
  "title": "New Book",
  "author": "Author Name",
  "description": "Book description",
  "price": 100000,
  "image": "https://...",
  "publishedDate": "2024-01-01",
  "pages": 350,
  "category": "Technology"
}
```
**Response**: Created book with generated ID

### 4. UPDATE Book
**Endpoint**: `PUT /api/books/:id`
**Request Body**: Same as CREATE
**Response**: Updated book object

### 5. DELETE Book
**Endpoint**: `DELETE /api/books/:id`
**Response**: Success message

## Setup Instructions

### 1. Start the Backend Server
```bash
cd /Users/nguyenngocaithien/Webnangcao_K234111417/my-server

# Install dependencies (if cors is not installed)
npm install

# Start the server
npm start
```
Server will run at: `http://localhost:3000`

### 2. Start the Angular Application
```bash
cd /Users/nguyenngocaithien/Webnangcao_K234111417/my-app

# Install dependencies (if not already done)
npm install

# Start the development server
npm start
```
Application will run at: `http://localhost:4200`

### 3. Access Exercise 50
Navigate to: `http://localhost:4200/ex50`

## UI Components

### Main Page (List View)
- Display all books in a table format
- Each row shows: Title, Author, Description, Image, Date, Price, Pages
- Action buttons for each book: Details, Edit, Delete
- "Create New" button at the top

### Create Book Modal
- Form with fields for all book attributes
- Image preview before submission
- Accept both image URL and local image file (client-side processing)
- Form validation
- Cancel and Create buttons

### Edit Book Modal
- Pre-filled form with existing book data
- Same validation as create
- Cancel and Update buttons

### Detail View Modal
- Display-only view of book information
- Large book image
- All book details formatted nicely
- Edit and Close buttons
- Back button to return to list

## Validation
All required fields must be filled:
- Title (non-empty string)
- Author (non-empty string)
- Description (non-empty string)
- Category (must select from dropdown)
- Price (must be greater than 0)
- Image (URL or processed local image data)
- Published Date (valid date)
- Pages (must be greater than 0)

## Error Handling
- Server errors display user-friendly messages
- Network errors are caught and displayed
- Form validation prevents invalid submissions
- Confirmation dialog for delete operations
- Image fallback for broken image URLs

## Technologies Used
- **Frontend**: Angular, TypeScript, HTML, CSS
- **Backend**: Node.js, Express
- **HTTP**: HttpClientModule for API calls
- **Styling**: CSS3 with animations and gradients
- **CORS**: Enabled for cross-origin requests

## File Structure
```
ex50/
├── ex50.ts           # Component logic
├── ex50.html         # Template
├── ex50.css          # Styles
└── ex50.spec.ts      # Unit tests

book.service.ts       # API service
classes/
└── book.ts           # Book interface

server/
└── index.js          # Express REST API
```

## Features Implemented
✅ GET all books
✅ GET single book
✅ CREATE book
✅ UPDATE book
✅ DELETE book with confirmation
✅ Image handling and fallback
✅ Form validation
✅ Error handling
✅ Responsive UI
✅ Modal dialogs
✅ Loading states
✅ Modern UI/UX design

## Notes
- Images can come from external URLs or local file upload (converted client-side)
- If an image fails to load, a placeholder is displayed
- Prices are displayed in Vietnamese Dong (VND)
- Dates are in YYYY-MM-DD format
- Categories include: Technology, Science, Fiction, History, Biography, Self-Help, Business, Other

## Future Enhancements
- Pagination for large book lists
- Search and filter functionality
- Sorting by different columns
- Bulk operations (select multiple books)
- Image upload functionality
- Rating and review system
- User authentication
- Data persistence with database
