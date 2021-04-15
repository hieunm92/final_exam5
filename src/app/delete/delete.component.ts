import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBook} from '../interface/ibook';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  book: IBook;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
      this.bookService.getBookById(this.id).subscribe(result => {
        this.book = result;
      });
    });
  }

  // tslint:disable-next-line:typedef
  deleteBook() {
    this.bookService.delete(this.id).subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
