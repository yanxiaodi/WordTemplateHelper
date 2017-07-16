import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { GlobalService } from './../global/global.service';

@Injectable()
export class HttpRequestService {

  constructor(public http: Http) { }

  /**
     * get method, get a json object
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
   * post method, get a json object
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
