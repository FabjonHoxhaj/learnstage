import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Output() starColorEvent = new EventEmitter();
  color = "orange";
  

  constructor() { }

  ngOnInit(): void {
  }

  parentMethod() {
      this.starColorEvent.emit(this.color);
  }

}
