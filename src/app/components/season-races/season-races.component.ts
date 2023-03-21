import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'app-season-races',
  templateUrl: './season-races.component.html',
  styleUrls: ['./season-races.component.css']
})
export class SeasonRacesComponent implements OnInit {
  races: any[] = [];
  selectedSeason: number = new Date().getFullYear();
  years: number[] = [];

  constructor(private seasonService: SeasonService) {}

  ngOnInit(): void {
    this.loadRaces();
  }

  loadRaces(): void {
    this.years = [].constructor(72).fill(0).map((_: any, i: number) => 1950 + i)
    this.seasonService.getRacesBySeason(this.selectedSeason).subscribe((data) => {
      this.races = data;
    });
  }

  onSeasonChange(season: number): void {
    this.selectedSeason = season;
    this.loadRaces();
  }
}
