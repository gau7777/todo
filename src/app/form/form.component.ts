import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { Task } from 'src/app/form.model';
import { from } from 'rxjs';
import { stringify } from 'querystring';
import { FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
// model = new Task('','','');
// m :Task;
// profileform = new FormGroup({
//   Name: new FormControl(''),
//   Des: new FormControl(''),
//   Dates: new FormControl('')
// });
profileform: { Name?: any, Des?: any, Dates?: any, id?: string} = {};

@Output()  onClick = new EventEmitter();
// @Input() come = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // get CurrentTask(){
  //   return stringify(this.model);
  // }

  onSubmit(){
    // this.m = this.model.

    this.profileform.id = uuid();
    this.http.post('http://localhost:5000/login/' + this.profileform.id, this.profileform).subscribe(responseData => {
      console.log(responseData);

    });
    this.onClick.emit(this.profileform);
    // this.eve();
  }


  // eve(){
  //   this.onClick.emit(this.profileform);
  // }

}
