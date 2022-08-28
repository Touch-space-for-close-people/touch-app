import { Component, OnInit } from '@angular/core';
import { PhotoLibrary } from '@awesome-cordova-plugins/photo-library/ngx';

@Component({
  selector: 'app-share-idea',
  templateUrl: './share-idea.component.html',
  styleUrls: ['./share-idea.component.scss'],
})
export class ShareIdeaComponent implements OnInit {
  fileToUpload: File | null = null;
  constructor() { }

  ngOnInit() {
    }

  public choosePhoto(): void {

  }

  public handleFileInput(files: any) {
    console.log(files.files);
    // this.fileToUpload = files.item(0);
  }
}
