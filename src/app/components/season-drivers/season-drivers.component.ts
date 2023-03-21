import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';


@Component({
  selector: 'app-season-drivers',
  templateUrl: './season-drivers.component.html',
  styleUrls: ['./season-drivers.component.css']
})
export class SeasonDriversComponent {
  years: number[] = [];
  drivers: any[] = [];
  selectedSeason: number = new Date().getFullYear();

  constructor(private seasonService: SeasonService) {}

  ngOnInit(): void {
    this.years = [].constructor(72).fill(0).map((_: any, i: number) => 1950 + i)
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.seasonService
      .getDriversBySeason(this.selectedSeason)
      .subscribe((data) => {
        this.drivers = data.drivers;
      });
  }

  onSeasonChange(season: number): void {
    this.selectedSeason = season;
    this.loadDrivers();
  }
  
}
