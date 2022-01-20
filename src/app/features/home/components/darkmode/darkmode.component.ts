import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent implements OnInit {


@Output() emitMessage = new EventEmitter<boolean>();

public btnText: string = "🌙"
  constructor() { 
  
  }

  ngOnInit(): void {
  }


  public setDarkTheme(): void {
    
    
    document.body.classList.toggle('dark-theme');

    this.btnText == '🌙' ? this.btnText = '☀️' : this.btnText = '🌙'
  }
  
}
