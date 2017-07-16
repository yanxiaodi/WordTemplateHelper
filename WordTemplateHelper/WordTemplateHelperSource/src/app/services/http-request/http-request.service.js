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
var http_1 = require('@angular/http');
/**
 * QdcHGRequestService
 */
var HttpRequestService = (function () {
    function HttpRequestService(http) {
        this.http = http;
    }
    /**
     * get方法 获取json对象
     *
     * @template T
     * @param {string} url
     * @returns {Promise<T>}
     *
     * @memberOf HttpRequestService
     */
    HttpRequestService.prototype.get4Json = function (url) {
        return this.http.get(url).toPromise()
            .then(function (response) { return response.json(); });
    };
    /**
     * post方法 获取json对象
     *
     * @template T
     * @param {string} url
     * @param {*} params
     * @returns {Promise<T>}
     *
     * @memberOf HttpRequestService
     */
    HttpRequestService.prototype.post4Json = function (url, params) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        //let body = JSON.stringify({ paramJson });
        return this.http.post(url, params).toPromise()
            .then(function (response) { return response.json(); });
    };
    HttpRequestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpRequestService);
    return HttpRequestService;
}());
exports.HttpRequestService = HttpRequestService;
//# sourceMappingURL=http-request.service.js.map