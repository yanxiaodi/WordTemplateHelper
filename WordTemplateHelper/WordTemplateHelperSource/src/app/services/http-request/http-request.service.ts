import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { AppGlobal } from '../../common/app-global';

/**
 * QdcHGRequestService
 */
@Injectable()
export class HttpRequestService {
    constructor(public http: Http ) {

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
    get4Json<T>(url: string): Promise<T> {
        return this.http.get(url).toPromise()
            .then(response => response.json());
    }



    
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
    post4Json<T>(url: string, params: any): Promise<T> {

        return this.http.post(url, params).toPromise()
            .then(response => response.json());
    }

}