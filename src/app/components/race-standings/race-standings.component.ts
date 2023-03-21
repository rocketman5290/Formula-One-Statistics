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
  season: number = new Date().getFullYear();
  round: number = 1;

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
}
