import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {IBook} from '../interface/ibook';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createBook() {
    this.bookService.create(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
