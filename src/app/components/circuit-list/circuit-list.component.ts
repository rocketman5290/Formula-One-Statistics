import { Component, OnInit } from '@angular/core';
import { Circuit, CircuitService } from '../../services/circuit.service';

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

  constructor(private circuitService: CircuitService) {}

  ngOnInit(): void {
    this.loadCircuits();
  }

  loadCircuits(): void {
    this.circuitService
      .getCircuits((this.currentPage - 1) * this.itemsPerPage, this.itemsPerPage)
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