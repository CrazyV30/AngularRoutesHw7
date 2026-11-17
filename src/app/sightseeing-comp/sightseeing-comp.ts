import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-sightseeing-comp',
  styleUrl: './sightseeing-comp.css',
  templateUrl: './sightseeing-comp.html',
})
export class SightseeingComp {}
