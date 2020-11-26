import { Directive, EventEmitter, HostBinding, HostListener, OnChanges, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective implements OnChanges {

  @HostBinding('class.fileover') fileOver: boolean = false;
  
  @Output() private fileDropped: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    console.log('lol')
  }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true

    console.log('Drag Over');
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false
    console.log('Drag Leave');
  }

  @HostListener('drop', ['$event']) onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('listen', evt);
    
    this.fileOver = false;
    
    const files = evt.dataTransfer.files;

    if(files.length > 0) {
      console.log('file', files)
      this.fileDropped.emit(files);
    }

    console.log('Drop');
  }
}
