import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userservice/user.service';
import { MessageService } from '../userservice/message.services';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { CONFIG } from '../../../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Component({
    selector: 'dashboard',
    styleUrls: ['./dashboard.component.css'],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    admintoken: any;
    menuImage: File = null;
    vendorInfo: any;
    menuCategory: String = '';

    constructor(private http: Http,
        private _appservice: UserService,
        private _message: MessageService,
    ) {

    }
    ngOnInit(): void {
        this.vendorInfo = {
            restaurantName: 'Eazzy Eats',
            description: 'Welcome to Eazzy Eats dashboard'
        }

        this._appservice.getVendorInfo({ customerId: localStorage.getItem('vendoradminId'), vendorId: localStorage.getItem('vendorId') })
            .subscribe((Response) => {
                if (Response.success) {
                    this.vendorInfo = Response.response_data;
                    // console.log(this.vendorInfo);

                    // vendorName = this.vendorInfo.restaurantName;
                    // vendorDescription = this.vendorInfo.description;
                } else {
                    this._message.showWarning(Response.message)
                }
            }, (Error) => {
                this._message.showError(Error.message)
            });

    }

}
