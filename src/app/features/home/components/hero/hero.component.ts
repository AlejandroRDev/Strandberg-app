import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/home';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public hero: Hero;
  constructor() {
    this.hero = {
      text: 'Strandberg Guitars',
      title: 'GUITARS',
      filter: ["GUITAR TYPE", "PRODUCT FAMILY", "OFFERING", "PICKUPS", "FRETTING", "BRIDGE", "NECK", "FRETBOARD"]
    }
   }

  ngOnInit(): void {
  }

}
