// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a settings view. It is based on
  the settings sample, created by the Modern Assistance Experience Developer 
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code 
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationHeaderComponent } from '../shared/navigation-header/navigation.header.component';
import { ButtonComponent } from '../shared/button/button.component';
import { BrandFooterComponent } from '../shared/brand-footer/brand.footer.component';

// The SettingsStorageService provides CRUD operations on application settings.
import { SettingsStorageService, WordTemplateApiService, WordDocumentService } from '../services/index';
import { WordTemplateInfo } from '../models/index';
@Component({
    templateUrl: './my-private-template.component.html',
    styleUrls: ['./my-private-template.component.css']
})
export class MyPrivateTemplateComponent {

    // Get references to the radio buttons so we can toggle which is selected.
    //    @ViewChild('always') alwaysRadioButton: ElementRef;
    //    @ViewChild('onlyFirstTime') onlyFirstTimeRadioButton: ElementRef;
    private searchString: string;
    private resultList: Array<WordTemplateInfo>;
    public message: string;
    public isShowMessage: boolean;
    constructor(private settingsStorage: SettingsStorageService, public wordDocument: WordDocumentService, public wordTemplateApiService: WordTemplateApiService) {
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
        this.wordTemplateApiService.getMyPrivateTemplateList()
            .then(response => {
                console.log("获得返回值");

                if (response.isSuccess) {
                    console.log("获取数据成功");

                    response.result.forEach(x => this.resultList.push(x));
                }
                // else {
                //     this.message = "Upload failed!" + response.message;
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
        this.wordDocument.setOoxml(template.templateContent);
    }

    addOrganization(template: WordTemplateInfo) {
        this.wordTemplateApiService.addOrganizationTemplate(template)
            .then(response => {
                console.log("获得返回值");

                if (response.isSuccess) {
                    console.log("获取数据成功");
                    this.message = "Done!" + response.message;
                    this.isShowMessage = true;
                }
                else {
                    this.message = "Add to organization failed!" + response.message;
                    this.isShowMessage = true;
                }
            })
            .catch(error => {
                this.message = "Add to organization failed!";
                this.isShowMessage = true;
            })
    }

    closeMessage(){
        this.message = "";
        this.isShowMessage = false;
    }
}

