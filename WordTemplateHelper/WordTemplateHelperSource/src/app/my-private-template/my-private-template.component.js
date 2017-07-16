// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
  This file defines a settings view. It is based on
  the settings sample, created by the Modern Assistance Experience Developer
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/
var core_1 = require('@angular/core');
// The SettingsStorageService provides CRUD operations on application settings.
var index_1 = require('../services/index');
var MyPrivateTemplateComponent = (function () {
    function MyPrivateTemplateComponent(settingsStorage, wordDocument, wordTemplateApiService) {
        this.settingsStorage = settingsStorage;
        this.wordDocument = wordDocument;
        this.wordTemplateApiService = wordTemplateApiService;
        this.resultList = [];
        this.isShowMessage = false;
    }
    MyPrivateTemplateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var currentInstructionSetting = this.settingsStorage.fetch("StyleCheckerAddinShowInstructions");
        // Ensure that when the settings view loads, the radio button selection matches
        // the user's current setting.
        // if (currentInstructionSetting === "OnlyFirstTime") { 
        //   this.alwaysRadioButton.nativeElement.removeAttribute("checked");
        //   this.onlyFirstTimeRadioButton.nativeElement.setAttribute("checked", "checked");
        // }
        this.wordTemplateApiService.getMyPrivateTemplateList()
            .then(function (response) {
            console.log("获得返回值");
            if (response.IsSuccess) {
                console.log("获取数据成功");
                response.Result.forEach(function (x) { return _this.resultList.push(x); });
            }
            // else {
            //     this.message = "Upload failed!" + response.Message;
            //     this.isShowMessage = true;
            // }
        })
            .catch(function (error) {
            // this.message = "Upload failed!";
            // this.isShowMessage = true;
        });
    };
    //   onRadioButtonSelected(specificSetting: string, value: string){
    //     this.settingsStorage.store(specificSetting, value);
    //   }
    // Handle the event of a user entering text in the search box.
    // onSearchTextEntered(message: string): void {
    //     this.searchString = message;
    // }
    MyPrivateTemplateComponent.prototype.applyTemplate = function (template) {
        this.wordDocument.setOoxml(template.TemplateContent);
    };
    MyPrivateTemplateComponent.prototype.addOrganization = function (template) {
        var _this = this;
        this.wordTemplateApiService.addOrganizationTemplate(template)
            .then(function (response) {
            console.log("获得返回值");
            if (response.IsSuccess) {
                console.log("获取数据成功");
                _this.message = "Done!" + response.Message;
                _this.isShowMessage = true;
            }
            else {
                _this.message = "Add to organization failed!" + response.Message;
                _this.isShowMessage = true;
            }
        })
            .catch(function (error) {
            _this.message = "Add to organization failed!";
            _this.isShowMessage = true;
        });
    };
    MyPrivateTemplateComponent.prototype.closeMessage = function () {
        this.message = "";
        this.isShowMessage = false;
    };
    MyPrivateTemplateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/my-favorite-template/my-favorite-template.component.html',
            styleUrls: ['app/my-favorite-template/my-favorite-template.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.SettingsStorageService, index_1.WordDocumentService, index_1.WordTemplateApiService])
    ], MyPrivateTemplateComponent);
    return MyPrivateTemplateComponent;
}());
exports.MyPrivateTemplateComponent = MyPrivateTemplateComponent;
//# sourceMappingURL=my-private-template.component.js.map