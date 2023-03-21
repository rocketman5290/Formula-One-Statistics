import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../../services/race.service';

@Component({
  selector: 'app-race-status-counts',
  templateUrl: './race-status-counts.component.html',
  styleUrls: ['./race-status-counts.component.css'],
})
export class RaceStatusCountsComponent implements OnInit {
  statusCounts: any = {};
  season: number = 2023;
  round: number = 1;

  constructor(private raceService: RaceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.season = +params['season'] || 2023
      this.round = +params['round'] || 1;
      this.loadRaceStatusCounts();
    });
  }

  loadRaceStatusCounts(): void {
    this.raceService.getRaceStatusCounts(this.season, this.round).subscribe((data) => {
      this.statusCounts = data;
    });
  }

  onFormSubmit(season: string, round: string): void {
    this.season = Number(season);
    this.round = Number(round);
    this.loadRaceStatusCounts();
  }

  onSeasonChange(season: string, round: string): void {
    this.season = Number(season);
    this.round = Number(round);
    this.loadRaceStatusCounts();
  }
}

