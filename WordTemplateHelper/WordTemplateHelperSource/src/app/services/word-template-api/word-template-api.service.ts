import { GlobalService } from './../global/global.service';
import { Injectable } from '@angular/core';

/** Models */
import { BaseResponseResultInfo, ResponseResultInfo, TemplateType, WordTemplateInfo } from '../../models/index';
import { HttpRequestService } from "../http-request/http-request.service";

@Injectable()
export class WordTemplateApiService {

  constructor(public httpService: HttpRequestService, public globalService: GlobalService) { }

  /**
     * add
     * 
     * @param {TemplateType} type
     * @param {WordTemplateInfo} template
     * @returns {Promise<BaseResponseResultInfo>}
     * 
     * @memberOf WordTemplateApiService
     */
  addWordTemplate(type: TemplateType, template: WordTemplateInfo): Promise<BaseResponseResultInfo> {
    let url = `${this.globalService.server}/AddWordTemplate?userId=${this.globalService.currentUserId}&organizationId=${this.globalService.currentOrganizationId}&type=${type}`;
    let promise = this.httpService.post4Json<BaseResponseResultInfo>(url, template);
    return promise;
  }

  /**
   * search
   * 
   * @param {string} keyword
   * @returns {Promise<ResponseResultInfo<Array<WordTemplateInfo>>>}
   * 
   * @memberOf WordTemplateApiService
   */
  searchWordTemplateList(keyword: string): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
    let url = `${this.globalService.server}/SearchWordTemplateList?keyword=${keyword}`;
    let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
    return promise;
  }

  getMyPrivateTemplateList(): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
    let url = `${this.globalService.server}/GetMyPrivateTemplateList?userId=${this.globalService.currentUserId}`;
    let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
    return promise;
  }

  addMyFavoriteTemplate(template: WordTemplateInfo): Promise<BaseResponseResultInfo> {
    let url = `${this.globalService.server}/AddMyFavoriteTemplate?userId=${this.globalService.currentUserId}`;
    let promise = this.httpService.post4Json<BaseResponseResultInfo>(url, template);
    return promise;
  }

  getMyFavoriteTemplateList(): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
    let url = `${this.globalService.server}/GetMyFavoriteTemplateList?userId=${this.globalService.currentUserId}`;
    let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
    return promise;
  }

  addOrganizationTemplate(template: WordTemplateInfo): Promise<BaseResponseResultInfo> {
    let url = `${this.globalService.server}/AddOrganizationTemplate?orgId=${this.globalService.currentOrganizationId}`;
    let promise = this.httpService.post4Json<BaseResponseResultInfo>(url, template);
    return promise;
  }

  getOrganizationTemplateList(): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
    let url = `${this.globalService.server}/GetOrganizationTemplateList?orgId=${this.globalService.currentOrganizationId}`;
    let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
    return promise;
  }

}
