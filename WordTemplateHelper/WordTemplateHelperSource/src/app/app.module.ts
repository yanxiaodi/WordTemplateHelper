import { WordDocumentService } from './services/word-document/word-document.service';
import { GlobalService } from './services/global/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GlobalService,
    WordDocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
