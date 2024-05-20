import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FoodData } from 'src/app/interface/FoodData';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-modal-add-food',
  templateUrl: './modal-add-food.component.html',
  styleUrls: ['./modal-add-food.component.css']
})
export class ModalAddFoodComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalAddFoodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService : DataService
  ) {
    this.formData = {
      title : '',
      price : 0,
      image : ''
    };
   }
    
    formData : FoodData;


    addFood() {
      console.log(this.formData);
      this.dataService.addFood(this.formData).subscribe((response) => {
        console.log(response);
      });


      this.dialogRef.close();
    }
}
