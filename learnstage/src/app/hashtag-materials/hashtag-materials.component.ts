import { Component, OnInit, HostBinding } from '@angular/core';
import { FileUploadService } from '../upload.service';
import { FileUpload } from 'src/app/models/file-upload.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hashtag-materials',
  templateUrl: './hashtag-materials.component.html',
  styleUrls: ['./hashtag-materials.component.css']
})
export class HashtagMaterialsComponent implements OnInit {

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  fileUploads?: any[];

  starOne = 1;
  starTwo = 2;
  starThree = 3;
  starFour = 4;
  starFive = 5;
  rating = 0;
  hoverState = 0;
  buttonHide: boolean = false;


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


onStarEnter(starId: any) {
  this.hoverState = starId;
}

onStarLeave() {
  this.hoverState = 0;
}

onStarClicked(starId: any) {
  this.rating =starId;
  console.log(this.rating);
}

getIndex() {
  let index = document.getElementsByTagName("span");
  console.log(index);
}

onTagging(buttonHide: boolean) {
this.buttonHide = buttonHide;
}

}
