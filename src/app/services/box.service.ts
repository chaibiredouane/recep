import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Box } from "../models/box.model";

@Injectable()
export class BoxService {
    private baseUrl="http://localhost:9090/api/box";

    constructor(private http:HttpClient){}

    getAll (): Observable<Box[]>{
        return this.http.get<Box[]>(`${this.baseUrl}`);
      }
      
    getById (barcode:string): Observable<Box[]>{
        return this.http.get<Box[]>(`${this.baseUrl+"/param?sampleId="+barcode}`);
      }

    addRow (obj: Box): Observable<Object> {
         return this.http.post<Box>(`${this.baseUrl}`,obj);
        }
    
    updateRow (obj: Box): Observable<Object> {

          return this.http.put<Box>(`${this.baseUrl}`,obj);
         }
  
    deleteRow (obj:Box):Observable<Object>{
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
          body: obj
        }
        return this.http.delete<Box>(`${this.baseUrl}`, options);
    }
}