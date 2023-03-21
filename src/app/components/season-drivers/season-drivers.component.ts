import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'app-season-drivers',
  templateUrl: './season-drivers.component.html',
  styleUrls: ['./season-drivers.component.css']
})
export class SeasonDriversComponent {
  drivers: any[] = [];
  selectedSeason: number = new Date().getFullYear();

  constructor(private seasonService: SeasonService) {}

  ngOnInit(): void {
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.seasonService
      .getDriversBySeason(this.selectedSeason)
      .subscribe((data) => {
        this.drivers = data;
      });
  }

  onSeasonChange(season: number): void {
    this.selectedSeason = season;
    this.loadDrivers();
  }
  
}
