import { Component, OnInit } from '@angular/core';
import { Driver, DriverService } from '../../services/driver.service';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent implements OnInit {
  drivers: Driver[] = [];
  total: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  errorMessage: string | null = null;

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.driverService
      .getDrivers((this.currentPage - 1) * this.itemsPerPage, this.itemsPerPage)
      .pipe(
        catchError((err) => {
          console.error("Error loading drivers: ", err);
          this.errorMessage = "An error occurred while loading drivers. Please try again later.";
          return of({ drivers: [], total: 0 });
        })
      )
      .subscribe((data) => {
        this.drivers = data.drivers;
        this.total = data.total;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadDrivers();
  }
}

