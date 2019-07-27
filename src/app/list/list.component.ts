import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
// @Input() child = new FormGroup({
//   Name: new FormControl(''),
//   Des: new FormControl(''),
//   Dates: new FormControl('')
// });

@Input() child = [];
// @Output() go = new EventEmitter();
loadedposts = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:5000/get')
    .subscribe((posts: any) => {
      // this.loadedposts.push(posts);
      this.loadedposts = posts;
    });
  }

  onDelete(deli: any, index: number){
    this.http.delete('http://localhost:5000/del/' + deli).subscribe(res => {
      console.log(res);

    });
    this.loadedposts.splice(index,1);
  }

  // onView(viewId: any){
  //   this.http.get('http://localhost:5000/view/' + viewId).subscribe(res => {
  //     console.log(res);

  //   });
  //   this.go.emit(this.onView);
  // }
  // event(){
  //   this.go.emit(this.onView);
  // }

}
