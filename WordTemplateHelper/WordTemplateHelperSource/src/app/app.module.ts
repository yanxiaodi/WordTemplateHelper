import { WordTemplateApiService } from './services/word-template-api/word-template-api.service';
import { HttpRequestService } from './services/http-request/http-request.service';
import { SettingsStorageService } from './services/settings-storage/settings-storage.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { FabricTextFieldWrapperComponent } from './shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component';
import { FabricContextualMenuWrapperComponent } from './shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component';
import { ContextualMenuButtonComponent } from './shared/contextual-menu-button/contextual.menu.button.component';
import { BrandFooterComponent } from './shared/brand-footer/brand.footer.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation.header.component';
import { ButtonComponent } from './shared/button/button.component';
import { SettingsComponent } from './settings/settings.component';
import { MyPrivateTemplateComponent } from './my-private-template/my-private-template.component';
import { OrganizationTemplateComponent } from './organization-template/organization-template.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { MyFavoriteTemplateComponent } from './my-favorite-template/my-favorite-template.component';
import { InstructionStepsComponent } from './instruction-steps/instruction-steps.component';
import { SearchTemplateComponent } from './search-template/search-template.component';
import { WordDocumentService } from './services/word-document/word-document.service';
import { GlobalService } from './services/global/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

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
    GlobalService,
    WordDocumentService,
    SettingsStorageService,
    HttpRequestService,
    WordTemplateApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
