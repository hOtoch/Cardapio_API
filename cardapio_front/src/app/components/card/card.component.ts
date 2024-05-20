import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() price : number;
    @Input() title : string;
    @Input() image : string;

  constructor() { 
    this.price = 0;
    this.title = "Title";
    this.image = "image";
  }

  ngOnInit(): void {
  }
}

