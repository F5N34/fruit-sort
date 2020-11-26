import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DragAndDropComponent } from './shared/drag-and-drop/drag-and-drop.component';
import { DndDirective } from './shared/drag-and-drop/dnd.directive';
import { ResultComponent } from './shared/result/result.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DragAndDropComponent,
    DndDirective,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
