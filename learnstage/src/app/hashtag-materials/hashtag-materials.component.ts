import { Component, OnInit, HostBinding } from '@angular/core';
import { FileUploadService } from '../upload.service';
import { FileUpload } from 'src/app/models/file-upload.model';
import { map } from 'rxjs/operators';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-hashtag-materials',
  templateUrl: './hashtag-materials.component.html',
  styleUrls: ['./hashtag-materials.component.css']
})
export class HashtagMaterialsComponent implements OnInit {

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  fileUploads?: any[];

  public defaultColor1 = {
    "color" :  "#D3D3D3"
  }

  public defaultColor2 = {
    "color" :  "#D3D3D3"
  }

  public defaultColor3 = {
    "color" :  "#D3D3D3"
  }

  public defaultColor4 = {
    "color" :  "#D3D3D3"
  }

  public defaultColor5 = {
    "color" :  "#D3D3D3"
  }

  public starColor = {
    "color" : "orange"
  }

  stars = [1,2,3,4,5];
  rating = 0;
  hoverState = 0;


  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.uploadService.getFiles(100).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload)
      }
    }
  }

  /*fillStarColor(color: any) {
    alert(color);
  }*/

  fillStarColor1() {
     this.defaultColor1.color = "orange";
  }

  fillStarColor2() {
    this.defaultColor1.color = "orange";
    this.defaultColor2.color = "orange";
 }

 fillStarColor3() {
  this.defaultColor1.color = "orange";
  this.defaultColor2.color = "orange";
  this.defaultColor3.color = "orange";
  
}

fillStarColor4() {
  this.defaultColor1.color = "orange";
  this.defaultColor2.color = "orange";
  this.defaultColor3.color = "orange";
  this.defaultColor4.color = "orange";
}

fillStarColor5() {
  this.defaultColor1.color = "orange";
  this.defaultColor2.color = "orange";
  this.defaultColor3.color = "orange";
  this.defaultColor4.color = "orange";
  this.defaultColor5.color = "orange";
}

enter(i: any) {
  this.hoverState = i;
}

leave(i: any) {
  this.hoverState = 0;
}

updateRating(i: any) {
  this.rating = i;
}


}
