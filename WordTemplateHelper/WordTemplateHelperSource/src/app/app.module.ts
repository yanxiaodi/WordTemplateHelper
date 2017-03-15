import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchTemplateComponent } from './search-template/search-template.component';
import { InstructionStepsComponent } from './instruction-steps/instruction-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTemplateComponent,
    InstructionStepsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
