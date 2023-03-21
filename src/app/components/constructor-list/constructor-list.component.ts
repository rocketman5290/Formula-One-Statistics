import { Component, OnInit } from '@angular/core';
import { Constructor, ConstructorService } from '../../services/constructor.service';

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

  constructor(private constructorService: ConstructorService) {}

  ngOnInit(): void {
    this.loadConstructors();
  }

  loadConstructors(): void {
    this.constructorService
      .getConstructors((this.currentPage - 1) * this.itemsPerPage, this.itemsPerPage)
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

