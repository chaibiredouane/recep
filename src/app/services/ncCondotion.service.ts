import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NcCondition } from "../models/ncCondition.model";

@Injectable()
export class NcConditionService{
    private baseUrl="http://localhost:9090/api/nc/cond";

    constructor(private http:HttpClient){}

    getAll (): Observable<NcCondition[]>{
        return this.http.get<NcCondition[]>(`${this.baseUrl}`);
      }
      
    addRow (obj: NcCondition): Observable<Object> {
         return this.http.post<NcCondition>(`${this.baseUrl}`,obj);
        }
    
    updateRow (obj: NcCondition): Observable<Object> {

          return this.http.put<NcCondition>(`${this.baseUrl}`,obj);
         }
  
    deleteRow (obj:NcCondition):Observable<Object>{
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
          body: obj
        }
        return this.http.delete<NcCondition>(`${this.baseUrl}`, options);
    }
}