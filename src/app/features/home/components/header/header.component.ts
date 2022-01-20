import { Component, OnInit } from '@angular/core';
import { Header } from '../../../home/models/home';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: Header;  

  constructor() { 
    this.header = {
      image: {
        src: "../../../assets/images/Strandberg-logo.png",
        alt: "Logo de Strandberg"
      },
      text: ["DEALERS", "SUPPORT", "MY ACCOUNT"]
    }
  };

  ngOnInit(): void {
  }

}
