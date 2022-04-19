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

  @Output() starEnter: EventEmitter<number> = new EventEmitter();
  @Output() starLeave: EventEmitter<number> = new EventEmitter();
  @Output() starClicked: EventEmitter<number> = new EventEmitter();
 

  constructor() { }

  ngOnInit() {
    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }

  }

  onStarEnter() {
    this.starEnter.emit(this.starId);
  }

  onStarLeave() {
    this.starLeave.emit();
  }

  onStarClicked() {
    this.starClicked.emit(this.starId);
  }

}
