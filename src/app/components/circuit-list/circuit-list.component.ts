import { Component, OnInit } from '@angular/core';
import { Circuit, CircuitService } from '../../services/circuit.service';
import { catchError } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.css'],
})
export class CircuitListComponent implements OnInit {
  circuits: Circuit[] = [];
  total: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  errorMessage: string | null = null;

  constructor(private circuitService: CircuitService) {}

  ngOnInit(): void {
    this.loadCircuits();
  }

  loadCircuits(): void {
    this.circuitService
      .getCircuits((this.currentPage - 1) * this.itemsPerPage, this.itemsPerPage)
      .pipe(
        catchError((err) => {
          console.error("Error loading circuits: ", err);
          this.errorMessage = "An error occurred while loading circuits. Please try again later.";
          return of({ circuits: [], total: 0 });
        })
      )
      .subscribe((data) => {
        this.circuits = data.circuits;
        this.total = data.total;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCircuits();
  }
}