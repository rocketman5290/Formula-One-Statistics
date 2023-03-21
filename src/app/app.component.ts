import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'f1';
  round: string = '1';
  season: string = new Date().getFullYear().toString();
}
