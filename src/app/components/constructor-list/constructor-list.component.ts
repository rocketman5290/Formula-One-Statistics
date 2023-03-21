import { Component, OnInit } from '@angular/core';
import { Constructor, ConstructorService } from '../../services/constructor.service';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-constructor-list',
  templateUrl: './constructor-list.component.html',
  styleUrls: ['./constructor-list.component.css'],
})
export class ConstructorListComponent implements OnInit {
  constructors: Constructor[] = [];
  total: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  errorMessage: string | null = null;

  constructor(private constructorService: ConstructorService) {}

  ngOnInit(): void {
    this.loadConstructors();
  }

  loadConstructors(): void {
    this.constructorService
      .getConstructors((this.currentPage - 1) * this.itemsPerPage, this.itemsPerPage)
      .pipe(
        catchError((err) => {
          console.error("Error loading constructors: ", err);
          this.errorMessage = "An error occurred while loading constructors. Please try again later.";
          return of({ constructors: [], total: 0 });
        })
      )
      .subscribe((data) => {
        this.constructors = data.constructors;
        this.total = data.total;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadConstructors();
  }
}

