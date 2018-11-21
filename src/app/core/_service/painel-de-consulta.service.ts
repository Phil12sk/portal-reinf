import { Http, RequestOptions, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class PainelDeConsultaService{
    constructor(private http: HttpClient){}
    basePath = environment.basePath

    getCompany(){
        const url = this.basePath + environment.companies
        const headers = new HttpHeaders
        headers.append('Content-Type', 'application/json')
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
        return this.http.get<any>(url, {headers: headers})
        //return this.http1.get<any>(url, httpOptions)
    }

    getSystem(){
        const url = this.basePath + environment.sistemas
        const headers = new HttpHeaders
        headers.append('Content-Type', 'application/json')
        return this.http.get<any>(url, {headers: headers})
    }

    getLayouts(){
        const url = this.basePath + environment.layouts
        const headers = new HttpHeaders
        headers.append('Content-Type', 'application/json')
        return this.http.get<any>(url, {headers: headers})
    }

    getXmls(companyId){
        const url = this.basePath + environment.xmlEnviados.getAllXml(companyId)
        const headers = new HttpHeaders
        headers.append('Content-Type', 'application/json')
        return this.http.get<any>(url, {headers: headers})
    }
}