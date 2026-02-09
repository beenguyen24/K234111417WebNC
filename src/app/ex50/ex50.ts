import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../classes/book';

@Component({
  selector: 'app-ex50',
  standalone: false,
  templateUrl: './ex50.html',
  styleUrls: ['./ex50.css'],
})
export class Ex50 implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;
  showModal = false;
  modalMode: 'create' | 'edit' | 'detail' = 'create';
  loading = false;
  error = '';

  // Form data for create/edit
  formBook: Omit<Book, 'id'> = {
    title: '',
    author: '',
    description: '',
    price: 0,
    image: '',
    publishedDate: '',
    pages: 0,
    category: '',
  };

  categories = [
    'Technology',
    'Science',
    'Fiction',
    'History',
    'Biography',
    'Self-Help',
    'Business',
    'Other',
  ];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;
    this.error = '';
    this.bookService.getAllBooks().subscribe(
      (data) => {
        this.books = data;
        this.loading = false;
      },
      (err) => {
        this.error = 'Failed to load books. Please try again.';
        this.loading = false;
        console.error(err);
      }
    );
  }

  openCreateModal(): void {
    this.modalMode = 'create';
    this.resetForm();
    this.showModal = true;
  }

  openEditModal(book: Book): void {
    this.modalMode = 'edit';
    this.selectedBook = book;
    this.formBook = {
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      image: book.image,
      publishedDate: book.publishedDate,
      pages: book.pages,
      category: book.category,
    };
    this.showModal = true;
  }

  openDetailModal(book: Book): void {
    this.modalMode = 'detail';
    this.selectedBook = book;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedBook = null;
    this.error = '';
  }

  resetForm(): void {
    this.formBook = {
      title: '',
      author: '',
      description: '',
      price: 0,
      image: '',
      publishedDate: '',
      pages: 0,
      category: '',
    };
    this.error = '';
  }

  saveBook(): void {
    if (!this.validateForm()) {
      this.error = 'Please fill in all required fields.';
      return;
    }

    this.loading = true;
    this.error = '';

    if (this.modalMode === 'create') {
      this.bookService.createBook(this.formBook).subscribe(
        () => {
          this.loading = false;
          this.closeModal();
          this.loadBooks();
        },
        (err) => {
          this.loading = false;
          this.error = 'Failed to create book. Please try again.';
          console.error(err);
        }
      );
    } else if (this.modalMode === 'edit' && this.selectedBook) {
      this.bookService.updateBook(this.selectedBook.id, this.formBook).subscribe(
        () => {
          this.loading = false;
          this.closeModal();
          this.loadBooks();
        },
        (err) => {
          this.loading = false;
          this.error = 'Failed to update book. Please try again.';
          console.error(err);
        }
      );
    }
  }

  deleteBook(book: Book): void {
    const confirmed = confirm(
      `Are you sure you want to delete "${book.title}"? This action cannot be undone.`
    );

    if (confirmed) {
      this.loading = true;
      this.error = '';
      this.bookService.deleteBook(book.id).subscribe(
        () => {
          this.loading = false;
          this.loadBooks();
          alert('Book deleted successfully!');
        },
        (err) => {
          this.loading = false;
          this.error = 'Failed to delete book. Please try again.';
          console.error(err);
        }
      );
    }
  }

  validateForm(): boolean {
    return (
      this.formBook.title.trim() !== '' &&
      this.formBook.author.trim() !== '' &&
      this.formBook.description.trim() !== '' &&
      this.formBook.category.trim() !== '' &&
      this.formBook.price > 0 &&
      this.formBook.image.trim() !== '' &&
      this.formBook.publishedDate.trim() !== '' &&
      this.formBook.pages > 0
    );
  }

  onImageLoad(event: any): void {
    // Handle image loading errors if needed
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/150?text=No+Image';
  }
}
