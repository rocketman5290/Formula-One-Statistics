import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../../services/race.service';
@Component({
  selector: 'app-race-qualifying',
  templateUrl: './race-qualifying.component.html',
  styleUrls: ['./race-qualifying.component.css']
})
export class RaceQualifyingComponent implements OnInit {
  qualifyingResults: any[] = [];
  season: number = 2023;
  round: number = 1;

  constructor(private raceService: RaceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.season = +params['season'] || 2023;
      this.round = +params['round'] || 1;
      this.loadQualifyingResults();
    });
  }

  loadQualifyingResults(): void {
    this.raceService.getQualifyingResults(this.season, this.round).subscribe((data) => {
      this.qualifyingResults = data;
    });
  }

  onFormSubmit(season: string, round: string): void {
    this.season = Number(season);
    this.round = Number(round);
    this.loadQualifyingResults();
  }

  onSeasonChange(season: string, round: string): void {
    this.season = Number(season);
    this.round = Number(round);
    this.loadQualifyingResults();
  }

}
