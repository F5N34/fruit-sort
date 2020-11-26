import { Directive, EventEmitter, HostBinding, HostListener, OnChanges, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective implements OnChanges {

  @HostBinding('class.fileover') fileOver: boolean = false;
  
  @Output() private fileDropped: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
  }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false
  }

  @HostListener('drop', ['$event']) onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    
    const files = evt.dataTransfer.files;

    if(files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
