import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class EnviosRFBService{
    constructor(private http: Http){}
    basePath = environment.basePath

    sendEnviosRBF(body: any){
        const url = this.basePath + ''
        const headers = new Headers()
        headers.append('', '')
        return this.http.post(url, body, {headers: headers})
            .map(resp => resp.json())
    }
}