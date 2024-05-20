import { Component, OnInit } from '@angular/core';
import { FoodData } from './interface/FoodData';
import { DataService } from './services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddFoodComponent } from './components/modal-add-food/modal-add-food.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data : FoodData[];

  constructor(private dataService : DataService, public dialog: MatDialog){
    this.data = [];
  }

  ngOnInit(): void {

    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
        
  };

  openModalAddFood() : void {
    const dialogRef = this.dialog.open(ModalAddFoodComponent);
  }
};