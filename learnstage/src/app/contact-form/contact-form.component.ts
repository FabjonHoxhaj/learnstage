import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers: [HttpService]
})
export class ContactFormComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.resetForm();
  }

  create() {
    /*let input = (<HTMLInputElement>document.getElementById("inputValue")).value;

    this.http.sendDataForm(input).subscribe(
      data => console.log(data),
      error => console.error(error));

  }*/

}

}
