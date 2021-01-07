import { Observable, Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { ExpectedSample, Sample } from '../models/sample.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SampleService{
  private baseUrl="http://localhost:9090/api/samples";
  private expectedUrl="http://localhost:9090/api/samples/expected";
     samples:Sample[]=[];
     expectedSamples:ExpectedSample[]=[];
    constructor(private http:HttpClient){ }

    getSamples (): Observable<Sample[]>{
      return this.http.get<Sample[]>(`${this.baseUrl}`);
    }
    
    saveToServer(){ }

    addSample (sample: Sample): Observable<Object> {
       return this.http.post<Sample>(`${this.baseUrl}`,sample);
      }
  
    updateSample (sample: Sample): Observable<Object> {
        return this.http.put<Sample>(`${this.baseUrl}`,sample);
       }

    deleteSample (sample:Sample):Observable<Object>{
      console.log('service sample id  : '+ sample.id);
      return this.http.delete<Sample>(`${this.baseUrl}/${sample.id}`);
    }

    subject=new Subject<Sample[]>();
    emitSubject(){this.subject.next(this.samples);}


    // -----------------------------------Expected Sample ------------------------------------------
    getexpectedSample (): Observable<ExpectedSample[]>{
      return this.http.get<ExpectedSample[]>(`${this.expectedUrl}`);
    }

    addexpectedSample (sample: ExpectedSample): Observable<Object> {
       return this.http.post<ExpectedSample>(`${this.expectedUrl}`,sample);
      }
  
    updateexpectedSample (sample: ExpectedSample): Observable<Object> {
        return this.http.put<ExpectedSample>(`${this.expectedUrl}`,sample);
       }

    deleteexpectedSample (sample:ExpectedSample):Observable<Object>{
      console.log('service sample id  : '+ sample.id);
      return this.http.delete<ExpectedSample>(`${this.expectedUrl}/${sample.id}`);
    }

    subjectexpectedSample=new Subject<ExpectedSample[]>();
    emitSubjectexpectedSample(){this.subjectexpectedSample.next(this.expectedSamples);}

}