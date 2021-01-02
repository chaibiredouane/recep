import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NcInfo } from "../models/ncInfo";

@Injectable()
export class NcInfoService{
    private baseUrl="http://localhost:9090/api/nc/info";
    ncInfos: NcInfo[];

    constructor(private http:HttpClient){}

    getAll (): Observable<NcInfo[]>{
        return this.http.get<NcInfo[]>(`${this.baseUrl}`);
      }
      
      saveToServer(){ }
  
      addRow (ncInfo: NcInfo): Observable<Object> {
         return this.http.post<NcInfo>(`${this.baseUrl}`,ncInfo);
        }
    
      updateRow (ncInfo: NcInfo): Observable<Object> {
        console.log('code : '||ncInfo.nc_code);
     
          return this.http.put<NcInfo>(`${this.baseUrl}`,ncInfo);
         }
  
      deleteRow (ncInfo:NcInfo):Observable<Object>{
        return this.http.delete<NcInfo>(`${this.baseUrl}/${ncInfo}`);
      }
}