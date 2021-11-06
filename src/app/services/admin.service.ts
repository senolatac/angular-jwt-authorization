import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = environment.BASE_URL + '/api/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + '/all', {headers: this.getHeaders});
  }
}
