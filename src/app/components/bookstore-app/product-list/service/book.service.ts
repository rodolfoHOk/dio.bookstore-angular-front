import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:8080/api/bookstore';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  mockBooks: Book[] = [
    {
      id: 1,
      name: 'Sherlock Holmes',
      price: 24.9,
      quantity: 2,
      category: 'category A',
      img: 'img1',
    },
    {
      id: 2,
      name: 'O Mundo de Sofia',
      price: 49.99,
      quantity: 2,
      category: 'category B',
      img: 'img2',
    },
    {
      id: 3,
      name: 'Arsene Lupin',
      price: 39.49,
      quantity: 1,
      category: 'category A',
      img: 'img3',
    },
    {
      id: 4,
      name: 'O Mundo de Sofia',
      price: 49.99,
      quantity: 1,
      category: 'category C',
      img: 'img2',
    },
    {
      id: 5,
      name: 'Arsene Lupin',
      price: 39.49,
      quantity: 1,
      category: 'category A',
      img: 'img3',
    },
    {
      id: 6,
      name: 'Sherlock Holmes',
      price: 24.9,
      quantity: 2,
      category: 'category A',
      img: 'img1',
    },
  ];

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getMockBooks(): Observable<Book[]> {
    return of(this.mockBooks);
  }
}
