import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { cpuUsage } from 'process';
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

  isLoading: boolean = false;

  @ViewChild('picToSend') picToSend: ElementRef;

  constructor(
    private verifyFruitService: VerifyFruitService
  ) { }

  ngOnInit(): void {
    this.fileUpload = {file: 'test'};
  }

  sendImgUpload(evt): void {
    this.fileToUpload = evt.item(0);
  }

  onSubmit(evt) {
    this.fileToUpload = this.picToSend.nativeElement.files[0];
    this.isLoading = true
    if(this.fileToUpload) {
      this.isLoading = true;
      this.verifyFruitService.sendImage(this.picToSend.nativeElement.files[0]).subscribe(
        (res) => {
          this.prediction = res;
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
          console.log(err);
        }
      );
      this.picToSend.nativeElement.value = null;
    } else {
      this.fileToUpload = evt[0]
      this.verifyFruitService.sendImage(evt[0]).subscribe(
        (res) => {
          this.prediction = res;
          this.isLoading = false;
        },
        (err) => {
          console.log(err);
          this.isLoading = false
        }
      );
    }
    this.picToSend.nativeElement.value = null;
  }

  sendUrl(): void {
    const url = this.urlToSend.nativeElement.value;
    this.fileToUpload = url;
    this.verifyFruitService.sendUrlImage(url).subscribe(
      (res) => {
        this.prediction = res;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  closeModal(evt) {
    this.prediction = evt;
  }
}