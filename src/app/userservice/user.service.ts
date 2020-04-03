import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CONFIG } from '../../../config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  constructor(private _http: Http, ) { }
  getToken() {
    console.log('token',localStorage.getItem('vendoradmintoken'));
    return localStorage.getItem('vendoradmintoken');
  }
  authHeader(headers: Headers) {
    headers.append('x-access-token', this.getToken());
    headers.append('Authorization', 'Bearer ' + this.getToken());
  }
  private _errorHandler(error: Response) {
    return Observable.throw(error.json() || "Server Error");
  }

  getCountries() {
    let headers = new Headers({ 'Accept': 'application/json' });
    this.authHeader(headers);
    return this._http.get(
      CONFIG.API_ENDPOINT + 'countries',
      { headers: headers }
    )
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  doLogin(loginData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'customer/login';
    return this._http.post(URL, loginData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  updatePassword(updateData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'customer/changepasswordAdmin';
    return this._http.post(URL, updateData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  forgotpassLinksend(forgotpassadmin) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'customer/forgotPasswordAdmin';
    return this._http.post(URL, forgotpassadmin, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  forgotPassword(forgotPasswordData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'customer/resetPasswordAdmin';
    return this._http.post(URL, forgotPasswordData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

//Add Category
  addCategory(updateData) {
    let headers = new Headers();
    this.authHeader(headers);
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'admin/addCategory';
    return this._http.post(URL, updateData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

   //All Category list
   getAllCategory(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'admin/getAllCategories';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  //Add Vendor
  addVendor(updateData) {
    let headers = new Headers();
    this.authHeader(headers);
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'admin/registerVendor';
    return this._http.post(URL, updateData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  //Add Vendor Items
  addVendorItems(updateData) {
    let headers = new Headers();
    this.authHeader(headers);
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'admin/addItem';
    return this._http.post(URL, updateData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  //Add Vendor Times
  addVendorTimes(updateData) {
    let headers = new Headers();
    this.authHeader(headers);
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'admin/registerVendorTime';
    return this._http.post(URL, updateData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

   //Get Vendor Info
   getVendorInfo(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    let options = new RequestOptions({ headers: headers });
    let URL = CONFIG.API_ENDPOINT + 'admin/getVendorInfo';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
}

