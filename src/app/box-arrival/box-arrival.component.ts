import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-arrival',
  templateUrl: './box-arrival.component.html',
  styleUrls: ['./box-arrival.component.scss']
})
export class BoxArrivalComponent implements OnInit {
 title:'Box arrival';
  constructor() { }

  ngOnInit(): void {
    this.title='Box arrival';
  }

}
