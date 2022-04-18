import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  starClassName = "star-rating-blank";

  @Input() starId: any;
  @Input() rating: any;

  @Output() leave: EventEmitter<any> = new EventEmitter();
  @Output() enter: EventEmitter<any> = new EventEmitter();
  @Output() bigClick: EventEmitter<any> = new EventEmitter();
 

  constructor() { }

  ngOnInit() {
    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }

  }

  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }

}
