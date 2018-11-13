import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class PainelDeConsultaService{
    constructor(private http: Http){}
    basePath = environment.basePath

    getCompany(){
        const url = this.basePath + environment.companies
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.get(url, {headers: headers})
            .map(resp => resp.json())
    }

    getSystem(){
        const url = this.basePath + environment.sistemas
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.get(url, {headers: headers})
            .map(resp => resp.json())
    }

    getLayouts(){
        const url = this.basePath + environment.layouts
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.get(url, {headers: headers})
            .map(resp => resp.json())
    }

    getXmls(companyId){
        const url = this.basePath + environment.xmlEnviados.getAllXml(companyId)
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.get(url, {headers: headers})
            .map(resp => resp.json())
    }
}