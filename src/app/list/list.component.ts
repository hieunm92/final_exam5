import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {IBook} from '../interface/ibook';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listBooks: IBook[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(result => {
      this.listBooks = result;
    });
  }

}
