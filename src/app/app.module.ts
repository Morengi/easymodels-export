import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DragulaModule } from 'ng2-dragula';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import {AutosizeModule} from 'ngx-autosize';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule.forRoot(),
    PinchZoomModule,
    AutosizeModule
  ],
  declarations: [AppComponent, HelloComponent, BoardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
