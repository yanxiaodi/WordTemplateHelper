
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationHeaderComponent } from '../shared/navigation-header/navigation.header.component';
import { ButtonComponent } from '../shared/button/button.component';
import { BrandFooterComponent } from '../shared/brand-footer/brand.footer.component';

// The SettingsStorageService provides CRUD operations on application settings.
import { SettingsStorageService, WordTemplateApiService, WordDocumentService } from '../services/index';
import { WordTemplateInfo } from '../models/index';
@Component({
    templateUrl: './organization-template.component.html',
    styleUrls: ['./organization-template.component.css']
})
export class OrganizationTemplateComponent {

    // Get references to the radio buttons so we can toggle which is selected.
    //    @ViewChild('always') alwaysRadioButton: ElementRef;
    //    @ViewChild('onlyFirstTime') onlyFirstTimeRadioButton: ElementRef;
    public searchString: string;
    public resultList: Array<WordTemplateInfo>;
    public message: string;
    public isShowMessage: boolean;
    constructor(public settingsStorage: SettingsStorageService, public wordDocument: WordDocumentService, public wordTemplateApiService: WordTemplateApiService) {
        this.searchString = "软件需求";
        this.resultList = [];
        this.isShowMessage = false;
    }

    ngAfterViewInit() {
        let currentInstructionSetting: string = this.settingsStorage.fetch("StyleCheckerAddinShowInstructions");

        // Ensure that when the settings view loads, the radio button selection matches
        // the user's current setting.
        // if (currentInstructionSetting === "OnlyFirstTime") { 
        //   this.alwaysRadioButton.nativeElement.removeAttribute("checked");
        //   this.onlyFirstTimeRadioButton.nativeElement.setAttribute("checked", "checked");
        // }
        this.wordTemplateApiService.getOrganizationTemplateList()
            .then(response => {
                console.log("获得返回值");

                if (response.IsSuccess) {
                    console.log("获取数据成功");

                    response.Result.forEach(x => this.resultList.push(x));
                }
                // else {
                //     this.message = "Upload failed!" + response.Message;
                //     this.isShowMessage = true;
                // }
            })
            .catch(error => {
                // this.message = "Upload failed!";
                // this.isShowMessage = true;
            })

    }

    //   onRadioButtonSelected(specificSetting: string, value: string){
    //     this.settingsStorage.store(specificSetting, value);
    //   }

    // Handle the event of a user entering text in the search box.
    // onSearchTextEntered(message: string): void {
    //     this.searchString = message;
    // }

    applyTemplate(template: WordTemplateInfo) {
        this.wordDocument.setOoxml(template.TemplateContent);
    }

    addFavorite(template: WordTemplateInfo) {
        this.wordTemplateApiService.addMyFavoriteTemplate(template)
            .then(response => {
                console.log("获得返回值");

                if (response.IsSuccess) {
                    console.log("获取数据成功");
                    this.message = "Done!" + response.Message;
                    this.isShowMessage = true;
                }
                else {
                    this.message = "Add to favorites failed!" + response.Message;
                    this.isShowMessage = true;
                }
            })
            .catch(error => {
                this.message = "Add to favorites failed!";
                this.isShowMessage = true;
            })
    }

    closeMessage(){
        this.message = "";
        this.isShowMessage = false;
    }

    
}

