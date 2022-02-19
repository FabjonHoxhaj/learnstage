import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arraySet = new Set();
  isHidden: boolean = false;


  closeButton() {
    this.isHidden = false;
  }

  newHashtag() {
    this.isHidden = true;
  }

  create() {
    let input = (<HTMLInputElement>document.getElementById("inputValue")).value;
    this.arraySet.add(input);

    /*this.httpService.sendData(input).subscribe(
      data => console.log(data),
      error => console.error(error));*/

    this.closeButton();
  }

}
