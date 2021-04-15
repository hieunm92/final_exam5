import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBook} from '../interface/ibook';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id: number = 0;
  // @ts-ignore
  book: IBook;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
      this.bookService.getBookById(this.id).subscribe(books => {
        this.book = books;
      })
    });
  }

  updateBook() {
    this.bookService.update(this.book, this.id).subscribe(result => {
      this.router.navigate(['/']);
    });
  }
}
