import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { map } from 'rxjs/operators';
//import { Response } from "@angular/common/http";

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    sendData(hashtag: any) {
        const body = JSON.stringify(hashtag);
        const headers = new HttpHeaders({ "Content-Type": "application/json" }); //hiermit weiß die DB welche Art von Daten ich schicke
        return this.http.post("https://learnstage-88b93-default-rtdb.asia-southeast1.firebasedatabase.app/data.json", body, { headers: headers });
    }

    getData() {
        const DBEntries = this.http.get("https://learnstage-88b93-default-rtdb.asia-southeast1.firebasedatabase.app/data.json")
        return DBEntries;
    }





    /*map((response: Response) => {
        const data = response.json();
        const returnArray = [];
        for (let key in data) {
            returnArray.push(data[key]);
        }
        return returnArray;
    }));*/

}

