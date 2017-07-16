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
var core_1 = require('@angular/core');
var index_1 = require('../index');
var app_global_1 = require('../../app-global');
/**
 * TurnSealService 转关施验封服务
 */
var WordTemplateApiService = (function () {
    function WordTemplateApiService(httpService) {
        this.httpService = httpService;
    }
    /**
     * 添加
     *
     * @param {TemplateType} type
     * @param {WordTemplateInfo} template
     * @returns {Promise<BaseResponseResultInfo>}
     *
     * @memberOf WordTemplateApiService
     */
    WordTemplateApiService.prototype.addWordTemplate = function (type, template) {
        var url = app_global_1.AppGlobal.getInstance().server + "/AddWordTemplate?userId=" + app_global_1.AppGlobal.getInstance().currentUserId + "&organizationId=" + app_global_1.AppGlobal.getInstance().currentOrganizationId + "&type=" + type;
        var promise = this.httpService.post4Json(url, template);
        return promise;
    };
    /**搜索
     *
     *
     * @param {string} keyword
     * @returns {Promise<ResponseResultInfo<Array<WordTemplateInfo>>>}
     *
     * @memberOf WordTemplateApiService
     */
    WordTemplateApiService.prototype.searchWordTemplateList = function (keyword) {
        var url = app_global_1.AppGlobal.getInstance().server + "/SearchWordTemplateList?keyword=" + keyword;
        var promise = this.httpService.get4Json(url);
        return promise;
    };
    WordTemplateApiService.prototype.getMyPrivateTemplateList = function () {
        var url = app_global_1.AppGlobal.getInstance().server + "/GetMyPrivateTemplateList?userId=" + app_global_1.AppGlobal.getInstance().currentUserId;
        var promise = this.httpService.get4Json(url);
        return promise;
    };
    WordTemplateApiService.prototype.addMyFavoriteTemplate = function (template) {
        var url = app_global_1.AppGlobal.getInstance().server + "/AddMyFavoriteTemplate?userId=" + app_global_1.AppGlobal.getInstance().currentUserId;
        var promise = this.httpService.post4Json(url, template);
        return promise;
    };
    WordTemplateApiService.prototype.getMyFavoriteTemplateList = function () {
        var url = app_global_1.AppGlobal.getInstance().server + "/GetMyFavoriteTemplateList?userId=" + app_global_1.AppGlobal.getInstance().currentUserId;
        var promise = this.httpService.get4Json(url);
        return promise;
    };
    WordTemplateApiService.prototype.addOrganizationTemplate = function (template) {
        var url = app_global_1.AppGlobal.getInstance().server + "/AddOrganizationTemplate?orgId=" + app_global_1.AppGlobal.getInstance().currentOrganizationId;
        var promise = this.httpService.post4Json(url, template);
        return promise;
    };
    WordTemplateApiService.prototype.getOrganizationTemplateList = function () {
        var url = app_global_1.AppGlobal.getInstance().server + "/GetOrganizationTemplateList?orgId=" + app_global_1.AppGlobal.getInstance().currentOrganizationId;
        var promise = this.httpService.get4Json(url);
        return promise;
    };
    WordTemplateApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.HttpRequestService])
    ], WordTemplateApiService);
    return WordTemplateApiService;
}());
exports.WordTemplateApiService = WordTemplateApiService;
//# sourceMappingURL=word-template-api.service.js.map