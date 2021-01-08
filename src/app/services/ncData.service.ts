import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NcData } from "../models/ncData.model";

@Injectable()
export class NcDataService {
    private baseUrl="http://localhost:9090/api/nc/data";

    constructor(private http:HttpClient){}

    getAll (): Observable<NcData[]>{
        return this.http.get<NcData[]>(`${this.baseUrl}`);
      }
      
    getById (sampleId:number): Observable<NcData[]>{
        return this.http.get<NcData[]>(`${this.baseUrl+"/params?sampleId="+sampleId}`);
        // return this.http.get<NcData[]>(`${this.baseUrl}`, {params: {id: id}});
      }

    addRow (obj: NcData): Observable<Object> {
         return this.http.post<NcData>(`${this.baseUrl}`,obj);
        }
    
    updateRow (obj: NcData): Observable<Object> {

          return this.http.put<NcData>(`${this.baseUrl}`,obj);
         }
  
    deleteRow (obj:NcData):Observable<Object>{
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
          body: obj
        }
        return this.http.delete<NcData>(`${this.baseUrl}`, options);
    }
} 