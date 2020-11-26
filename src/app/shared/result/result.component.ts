import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Prediction } from '../interfaces/prediction';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() prediction: Prediction;
  @Input() fileImg: any;

  public option: Object = {
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
            var dataLabel = data.labels[tooltipItem.index];
            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

            dataLabel += value;

            return dataLabel + '%'
          }
      }
  }
}


  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  img: string | ArrayBuffer;

  @Output() closeEvent: EventEmitter<Boolean> = new EventEmitter<boolean>();

  constructor() { }
  
  ngOnInit(): void {
    setTimeout(()=>{
      this.openModal();
      this.openFile();
      console.log('file img', this.fileImg);
 }, 500);
    
  }
  
  @ViewChild('btnModal') btnModal: ElementRef;
  @ViewChild('modal_1') modal_1: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    backdrop: any
    showDialog(){
        let view = this.modal_1.createEmbeddedView(null);
        this.vc.insert(view);
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open'); 
        this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
        this.backdrop = document.createElement('DIV')
        this.backdrop.className = 'modal-backdrop';
        document.body.appendChild(this.backdrop)
    }
    
    closeDialog() {
        this.vc.clear()
        document.body.removeChild(this.backdrop)
        this.closeEvent.emit(false);
    }

    openModal() {
      for (let index = 0; index < 3; index++) {
        const element = this.prediction.scores[index];
        if(element[1] * 100 > 1) {
          const pct = Number(element[1].toFixed(4));
          this.doughnutChartLabels.push(element[0]);
          this.doughnutChartData.push(pct * 100);
        }
      }

      // this.doughnutChartLabels = this.prediction.scores
      let el: HTMLElement = this.btnModal.nativeElement;
      el.click();
    }

    openFile() {
      if(this.fileImg) {
        if(typeof this.fileImg  === 'string') {
          this.img = this.fileImg;
        } else {
          let fr = new FileReader();
          fr.readAsDataURL(this.fileImg);
          fr.onload = (event) => {
            this.img = event.target.result;
          }
        }
      }
    }
}
