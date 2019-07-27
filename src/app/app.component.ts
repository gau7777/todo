import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormComponent } from 'src/app/form/form.component';
import { FormControl,FormGroup } from '@angular/forms';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  load: boolean;
  // f = FormComponent.prototype.CurrentTask;
  // pf = new FormGroup({
  //   Name: new FormControl(''),
  //   Des: new FormControl(''),
  //   Dates: new FormControl(''),

  // });

  pf = [];
  constructor(private http: HttpClient){}
  display(){
    this.load = true;
  }

  recieve($event){
  //  this.pf=$event;
  // this.pf = JSON.parse(JSON.stringify($event));
  this.pf.push(JSON.parse(JSON.stringify($event)));

  console.log(this.pf);
  }
}
