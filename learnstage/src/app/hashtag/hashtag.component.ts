import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css'],
  providers: [HttpService]
})
export class HashtagComponent implements OnInit {

  constructor(private http: HttpService) { }

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

    this.http.sendData(input).subscribe(
      data => console.log(data),
      error => console.error(error));

    this.closeButton();
  }

  onGetData() {
    this.http.getData().subscribe(
      (data: any) => {
        for (let i of Object.values(data))
          this.arraySet.add(i)
      });

  }

  /*onGetData() {
    console.log("test");
    this.http.getData().subscribe(
      data => this.arraySet.add(data) oder console.log(data)
    );

    for (let i of Object.values(DBEntries)) {
            return i;
  }*/

}
