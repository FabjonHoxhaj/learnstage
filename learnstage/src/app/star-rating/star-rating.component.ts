import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Output() starColorEvent = new EventEmitter();
  name = "Test";
  

  constructor() { }

  ngOnInit(): void {
  }

  parentMethod() {
      this.starColorEvent.emit(this.name);
  }

}
