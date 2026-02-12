import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { Ex50 } from './ex50';
import { BookService } from '../book.service';
import { Book } from '../classes/book';

describe('Ex50', () => {
  let component: Ex50;
  let fixture: ComponentFixture<Ex50>;
  let bookServiceMock: {
    getAllBooks: ReturnType<typeof vi.fn>;
    getBookById: ReturnType<typeof vi.fn>;
    createBook: ReturnType<typeof vi.fn>;
    updateBook: ReturnType<typeof vi.fn>;
    deleteBook: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    bookServiceMock = {
      getAllBooks: vi.fn().mockReturnValue(of([])),
      getBookById: vi.fn().mockReturnValue(
        of({
          id: 'b1',
          title: 'Test',
          author: 'Tester',
          description: 'Desc',
          price: 1000,
          image: 'https://example.com/image.jpg',
          publishedDate: '2026-02-12',
          pages: 120,
          category: 'Technology',
        })
      ),
      createBook: vi.fn(),
      updateBook: vi.fn(),
      deleteBook: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [Ex50],
      providers: [{ provide: BookService, useValue: bookServiceMock }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex50);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch detail by id when opening detail modal', () => {
    const book: Book = {
      id: 'b1',
      title: 'Local book',
      author: 'Local',
      description: 'Local desc',
      price: 500,
      image: 'https://example.com/local.jpg',
      publishedDate: '2026-01-01',
      pages: 100,
      category: 'Technology',
    };

    component.openDetailModal(book);

    expect(bookServiceMock.getBookById).toHaveBeenCalledWith('b1');
    expect(component.modalMode).toBe('detail');
    expect(component.showModal).toBe(true);
  });
});
