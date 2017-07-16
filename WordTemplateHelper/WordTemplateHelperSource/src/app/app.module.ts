import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchTemplateComponent } from './search-template/search-template.component';
import { InstructionStepsComponent } from './instruction-steps/instruction-steps.component';
import { SettingsComponent } from './settings/settings.component';
import { MyFavoriteTemplateComponent } from './my-favorite-template/my-favorite-template.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { OrganizationTemplateComponent } from './organization-template/organization-template.component';
import { MyPrivateTemplateComponent } from './my-private-template/my-private-template.component';


import { ButtonComponent } from './shared/button/button.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation.header.component';
import { BrandFooterComponent } from './shared/brand-footer/brand.footer.component';
import { ContextualMenuButtonComponent } from './shared/contextual-menu-button/contextual.menu.button.component';
import { FabricContextualMenuWrapperComponent } from './shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component';
import { FabricTextFieldWrapperComponent } from './shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component';
// The SettingsStorageService provides CRUD operations on application settings.
import { SettingsStorageService, WordDocumentService, HttpRequestService, WordTemplateApiService } from './services/index';


@NgModule({
  declarations: [
    AppComponent,
    SearchTemplateComponent,
    InstructionStepsComponent,
    SearchTemplateComponent,
    MyFavoriteTemplateComponent,
    AddTemplateComponent,
    OrganizationTemplateComponent,
    MyPrivateTemplateComponent,
    SettingsComponent,
    ButtonComponent,
    NavigationHeaderComponent,
    BrandFooterComponent,
    ContextualMenuButtonComponent,
    FabricContextualMenuWrapperComponent,
    FabricTextFieldWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    WordDocumentService,
    SettingsStorageService,
    HttpRequestService,
    WordTemplateApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
