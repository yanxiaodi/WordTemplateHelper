// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
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
  This file defines a component that enables a search-and-replace functionality for
  the Word document.
*/
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// The WordDocumentService provides methods for manipulating the document.
var word_document_service_1 = require('../services/word-document/word.document.service');
// The SettingsStorageService provides CRUD operations on application settings..
var index_1 = require('../services/index');
var index_2 = require('../models/index');
var AddTemplateComponent = (function () {
    function AddTemplateComponent(wordDocument, settingsStorage, wordTemplateApiService, router) {
        this.wordDocument = wordDocument;
        this.settingsStorage = settingsStorage;
        this.wordTemplateApiService = wordTemplateApiService;
        this.router = router;
        this.templateName = "";
        this.isShowMessage = false;
    }
    // onTemplateNameEntered(message: string): void {
    //     this.templateName = message;
    // }
    AddTemplateComponent.prototype.addTemplate = function () {
        var _this = this;
        if (this.templateName == "") {
            this.message = "Please input the template name!";
            this.isShowMessage = true;
        }
        else if (this.templateType == null || this.templateType == undefined) {
            this.message = "Please select the template type!";
            this.isShowMessage = true;
        }
        else {
            var tpl_1 = new index_2.WordTemplateInfo();
            // Run a batch operation against the Word object model.
            // Word.run(function (context) {
            //     // Create a proxy object for the document body.
            //     var body = context.document.body;
            //     // Queue a commmand to get the HTML contents of the body.
            //     var bodyHTML = body.getHtml();
            //     // Synchronize the document state by executing the queued commands, 
            //     // and return a promise to indicate task completion.
            //     return context.sync().then(function () {
            //         console.log("Body HTML contents: " + bodyHTML.value);
            //         tpl.DownloadCount = 0;
            //         tpl.ImageUrl = "";
            //         tpl.Name = this.templateName;
            //         tpl.Star = 0;
            //         tpl.TemplateContent = bodyHTML.value;
            //         tpl.Type = this.templateType;
            //         this.(this.templateType, tpl)
            //             .then(response => {
            //                 if (response.IsSuccess) {
            //                     this.message = "Upload done!";
            //                     this.isShowMessage = true;
            //                 }
            //                 else {
            //                     this.message = "Upload failed!" + response.Message;
            //                     this.isShowMessage = true;
            //                 }
            //             })
            //             .catch(error => {
            //                 this.message = "Upload failed!";
            //                 this.isShowMessage = true;
            //             })
            //     });
            // })
            //     .catch(function (error) {
            //         console.log("Error: " + JSON.stringify(error));
            //         if (error instanceof OfficeExtension.Error) {
            //             console.log("Debug info: " + JSON.stringify(error.debugInfo));
            //         }
            //     });
            //TODO
            this.wordDocument.getOoxml().then(function (value) {
                tpl_1.DownloadCount = 0;
                tpl_1.ImageUrl = "";
                tpl_1.Name = _this.templateName;
                tpl_1.Star = 0;
                tpl_1.TemplateContent = value;
                tpl_1.Type = _this.templateType;
                _this.wordTemplateApiService.addWordTemplate(_this.templateType, tpl_1)
                    .then(function (response) {
                    if (response.IsSuccess) {
                        _this.message = "Upload done!";
                        _this.isShowMessage = true;
                        _this.templateName = "";
                    }
                    else {
                        _this.message = "Upload failed!" + response.Message;
                        _this.isShowMessage = true;
                    }
                })
                    .catch(function (error) {
                    _this.message = "Upload failed!";
                    _this.isShowMessage = true;
                });
            });
        }
    };
    AddTemplateComponent.prototype.closeMessage = function () {
        this.message = "";
        this.isShowMessage = false;
    };
    AddTemplateComponent.prototype.setPrivateType = function () {
        this.templateType = index_2.TemplateType.Private;
    };
    AddTemplateComponent.prototype.setPublicType = function () {
        this.templateType = index_2.TemplateType.Public;
    };
    AddTemplateComponent.prototype.setOrganizationType = function () {
        this.templateType = index_2.TemplateType.Organization;
    };
    AddTemplateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/add-template/add-template.component.html',
            styleUrls: ['app/add-template/add-template.component.css']
        }), 
        __metadata('design:paramtypes', [word_document_service_1.WordDocumentService, index_1.SettingsStorageService, index_1.WordTemplateApiService, router_1.Router])
    ], AddTemplateComponent);
    return AddTemplateComponent;
}());
exports.AddTemplateComponent = AddTemplateComponent;
//# sourceMappingURL=add-template.component.js.map