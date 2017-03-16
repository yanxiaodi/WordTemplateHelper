import { Injectable } from '@angular/core';

/** Models */
import { BaseResponseResultInfo, ResponseResultInfo, TemplateType, WordTemplateInfo } from '../../models/index';
import { HttpRequestService } from '../index';
import { AppGlobal } from '../../common/app-global';

/**
 * WordTemplateApiService
 */
@Injectable()
export class WordTemplateApiService {
    constructor(public httpService: HttpRequestService) {

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
    addWordTemplate(type: TemplateType, template: WordTemplateInfo): Promise<BaseResponseResultInfo> {
        let url = `${AppGlobal.getInstance().server}/AddWordTemplate?userId=${AppGlobal.getInstance().currentUserId}&organizationId=${AppGlobal.getInstance().currentOrganizationId}&type=${type}`;
        let promise = this.httpService.post4Json<BaseResponseResultInfo>(url, template);
        return promise;
    }

    /**搜索
     * 
     * 
     * @param {string} keyword
     * @returns {Promise<ResponseResultInfo<Array<WordTemplateInfo>>>}
     * 
     * @memberOf WordTemplateApiService
     */
    searchWordTemplateList(keyword: string): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
        let url = `${AppGlobal.getInstance().server}/SearchWordTemplateList?keyword=${keyword}`;
        let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
        return promise;
    }

    getMyPrivateTemplateList(): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
        let url = `${AppGlobal.getInstance().server}/GetMyPrivateTemplateList?userId=${AppGlobal.getInstance().currentUserId}`;
        let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
        return promise;
    }

    addMyFavoriteTemplate(template: WordTemplateInfo): Promise<BaseResponseResultInfo> {
        let url = `${AppGlobal.getInstance().server}/AddMyFavoriteTemplate?userId=${AppGlobal.getInstance().currentUserId}`;
        let promise = this.httpService.post4Json<BaseResponseResultInfo>(url, template);
        return promise;
    }

    getMyFavoriteTemplateList(): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
        let url = `${AppGlobal.getInstance().server}/GetMyFavoriteTemplateList?userId=${AppGlobal.getInstance().currentUserId}`;
        let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
        return promise;
    }

    addOrganizationTemplate(template: WordTemplateInfo): Promise<BaseResponseResultInfo> {
        let url = `${AppGlobal.getInstance().server}/AddOrganizationTemplate?orgId=${AppGlobal.getInstance().currentOrganizationId}`;
        let promise = this.httpService.post4Json<BaseResponseResultInfo>(url, template);
        return promise;
    }

    getOrganizationTemplateList(): Promise<ResponseResultInfo<Array<WordTemplateInfo>>> {
        let url = `${AppGlobal.getInstance().server}/GetOrganizationTemplateList?orgId=${AppGlobal.getInstance().currentOrganizationId}`;
        let promise = this.httpService.get4Json<ResponseResultInfo<Array<WordTemplateInfo>>>(url);
        return promise;
    }



}