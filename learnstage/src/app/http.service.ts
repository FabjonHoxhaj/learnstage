import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    sendData(hashtag: any) {
        const body = JSON.stringify(hashtag);
        const headers = new HttpHeaders({ "Content-Type": "application/json" }); //hiermit weiß die DB welche Art von Daten ich schicke
        return this.http.post("https://learnstage-88b93-default-rtdb.asia-southeast1.firebasedatabase.app/data.json", body, { headers: headers });
    }
}

