import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetRestoDataService } from 'src/app/services/get-resto-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  step:any=1
  restaurantList:any
  dishes:any
  orderForm= new FormGroup({

    meal:new FormControl("null",Validators.required),
    persons:new FormControl("",Validators.required),
    restaurantName:new FormControl("null"),
    // dishDetails:new FormArray([
      
    //   new FormControl(""),
    //   new FormControl("")
      
    // ])
})

addDishes(){
  
}

  constructor(private getDataService:GetRestoDataService) { }


  ngOnInit(): void {
  }

  previous(){
    this.step--;
  }

  submit(){
    
    this.step++;
  
    this.getDataService.getRestaurantByMeal(this.orderForm.get('meal').value).subscribe((res)=>{
      this.restaurantList=res.data;
    })

    this.getDataService.getDishesByRestaurantName(this.orderForm.get('restaurantName').value).subscribe((res)=>{
      this.dishes=res.data;
    })


  }
}
