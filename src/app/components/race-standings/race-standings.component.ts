import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../../services/race.service';

@Component({
  selector: 'app-race-standings',
  templateUrl: './race-standings.component.html',
  styleUrls: ['./race-standings.component.css'],
})
export class RaceStandingsComponent implements OnInit {
  driverStandings: any[] = [];
  season = 2023;
  round = 0;

  constructor(private raceService: RaceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.season = +params['season'] || 2023;
      this.round = +params['round'] || 1;
      this.loadDriverStandings();
    });
  }

  loadDriverStandings(): void {
    this.raceService.getDriverStandings(this.season, this.round).subscribe((data) => {
      this.driverStandings = data;
    });
  }

  onFormSubmit(season: string, round: string): void {
    this.season = Number(season);
    this.round = Number(round);
    this.loadDriverStandings();
  }

  onSeasonChange(season: string, round: string): void {
    this.season = Number(season);
    this.round = Number(round);
    this.loadDriverStandings();
  }
}
