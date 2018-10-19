import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ControleEnviosService{
    constructor(private http: Http){}
    basePath = environment.basePath

    getControleEnvios(){
        const url = this.basePath + ''
        const headers = new Headers()
        headers.append('', '')
        return this.http.get(url, {headers: headers})
            .map(resp => resp.json())
    }
}