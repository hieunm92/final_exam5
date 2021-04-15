import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {IBook} from '../interface/ibook';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: number = 0;
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
      this.bookService.getBookById(this.id).subscribe(books => {
        this.book = books;
      });
    });
  }

}
