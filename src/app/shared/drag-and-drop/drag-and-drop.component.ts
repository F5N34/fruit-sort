import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Prediction } from '../interfaces/prediction';
import { Upload } from '../interfaces/upload.interface';
import { VerifyFruitService } from '../services/verify-fruit.service';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  @ViewChild('urlToSend') urlToSend:ElementRef;

  fileToUpload: any;

  fileUpload: Upload;

  prediction: Prediction;

  @ViewChild('picToSend') picToSend: ElementRef;

  constructor(
    private verifyFruitService: VerifyFruitService
  ) { }

  ngOnInit(): void {
    this.fileUpload = {file: 'test'};
  }

  sendImgUpload(evt): void {
    this.fileToUpload = evt.item(0);
    console.log('fileToUpload', this.fileToUpload);
  }

  async onSubmit(evt) {
    this.fileToUpload = this.picToSend.nativeElement.files[0];
    try {
      if(this.fileToUpload) {
        this.prediction = await this.verifyFruitService.sendImage(this.picToSend.nativeElement.files[0])
        this.picToSend.nativeElement.value = null;
        console.log(this.prediction)
      } else {
        this.fileToUpload = evt[0]
        this.prediction = await this.verifyFruitService.sendImage(evt[0])
        console.log('res',this.prediction)
      }
    } catch {
      console.log('error')
    }
    
    this.picToSend.nativeElement.value = null;
  }

  sendUrl(): void {
    const url = this.urlToSend.nativeElement.value;
    this.fileToUpload = url;
    console.log(url);
    this.verifyFruitService.sendUrlImage(url).subscribe(
      (res) => {
        this.prediction = res;
        console.log('good', res)
      },
      (error) => {
        console.log('erreur', error)
      }
    );
  }

  closeModal(evt) {
    this.prediction = evt;
    console.log('pred', this.prediction)
  }
}