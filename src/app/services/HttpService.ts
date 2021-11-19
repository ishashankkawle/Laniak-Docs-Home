import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService
{
    constructor( private http : HttpClient){}

    public headers = new HttpHeaders({
            "private_token" : "ztEQQRwzk_75ndnWc3yD"
        })
    
    
    getRequest(url)
    {
        return this.http.get(url);
    }

    getRequestWithHeader(url ,  header = this.headers)
    {
        
        return this.http.get(url, {headers : header});
    }

    postRequest(url , body , options)
    {
        return this.http.post(url , body  , options);
    }
}