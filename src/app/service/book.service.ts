import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../interface/ibook';

const URL_BOOK = 'http://localhost:3000/books/';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
  }

  getAllBook(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(URL_BOOK);
  }

  getBookById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(URL_BOOK + id);
  }

  create(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(URL_BOOK, book);
  }

  delete(id: number): Observable<IBook> {
    return this.httpClient.delete<IBook>(URL_BOOK + id);
  }
  update(book: IBook, id: number): Observable<IBook> {
    return this.httpClient.put<IBook>(URL_BOOK + id,book);
  }

}
