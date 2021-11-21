import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title : any;
  constructor() {

    this.title="Oumar FALL"
   }

  ngOnInit(): void {
  }

}
