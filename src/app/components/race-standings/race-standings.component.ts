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
  season: number = 2023;
  round: number = 0;

  constructor(private raceService: RaceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.season = +params['season'];
      this.round = +params['round'];
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
}
