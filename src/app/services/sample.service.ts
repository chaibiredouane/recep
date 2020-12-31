import { Observable, Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { Sample } from '../models/sample.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SampleService{
  private baseUrl="http://localhost:9090/api/samples";
     samples:Sample[]=[
        // { id:1,ces_id: 70, sample_barcode: 'CP16092002', container_type: "Urine_Ztube_10ml",collection_type:'Urine',collect_date:'20-12-2020',collect_time:'08:45',time_elapsed:0,constances_id:'16092001',late_status:'OK',label_status:'' },
        // { id:2,ces_id: 70, sample_barcode: 'CP21102020', container_type: "Urine_Ztube_10ml",collection_type:'Urine',collect_date:'20-12-2020',collect_time:'08:45',time_elapsed:103,constances_id:'16092001',late_status:'EXPECTED_LATE_SAMPLE_SCANNED',label_status:'Late sample' },
        // { id:3,ces_id: 70, sample_barcode: 'CN21102020', container_type: "Hep_8ml",collection_type:'Blood',collect_date:'20-12-2020',collect_time:'08:45',time_elapsed:110,constances_id:'16092001',late_status:'OK',label_status:'' },
        // { id:4,ces_id: 70, sample_barcode: 'BS21102020', container_type: "SST_8ml",collection_type:'Blood',collect_date:'20-12-2020',collect_time:'08:45',time_elapsed:103,constances_id:'16092001',late_status:'EXPECTED_TOO_LATE_SAMPLE_SCANNED',label_status:'Too late sample' },
        // { id:5,ces_id: 120, sample_barcode: 'CN12112021', container_type: "Hep_8ml",collection_type:'Blood',collect_date:'28-12-2020',collect_time:'08:21',time_elapsed:430,constances_id:'12092001',late_status:'OK',label_status:'' },
        // { id:6,ces_id: 120, sample_barcode: 'BS12112021', container_type: "SST_8ml",collection_type:'Blood',collect_date:'28-12-2020',collect_time:'08:215',time_elapsed:530,constances_id:'12092001',late_status:'EXPECTED_TOO_LATE_SAMPLE_SCANNED',label_status:'Too late sample' },
        // { id:7,ces_id: 40, sample_barcode: 'CP20161217', container_type: "Urine_Ztube_10ml",collection_type:'Urine',collect_date:'14-11-2020',collect_time:'10:47',time_elapsed:30,constances_id:'01122020',late_status:'OK',label_status:'' },
        // { id:8,ces_id: 40, sample_barcode: 'CM22102002', container_type: "EDTA_9ml",collection_type:'Blood',collect_date:'14-11-2020',collect_time:'10:47',time_elapsed:650,constances_id:'01122020',late_status:'EXPECTED_TOO_LATE_SAMPLE_SCANNED',label_status:'Too late sample' },
        // { id:9,ces_id: 12, sample_barcode: 'CM092102002', container_type: "EDTA_9ml",collection_type:'Blood',collect_date:'09-11-2020',collect_time:'08:19',time_elapsed:342,constances_id:'13122020',late_status:'OK',label_status:'' },
        // { id:10,ces_id: 123, sample_barcode: 'CP20191217', container_type: "Urine_Ztube_10ml",collection_type:'Urine',collect_date:'14-11-2020',collect_time:'06:40',time_elapsed:300,constances_id:'01122020',late_status:'OK',label_status:'' },
        // { id:11,ces_id: 23, sample_barcode: 'CM22102012', container_type: "EDTA_9ml",collection_type:'Blood',collect_date:'14-12-2020',collect_time:'11:42',time_elapsed:6500,constances_id:'01122020',late_status:'EXPECTED_LATE_SAMPLE_SCANNED',label_status:'Late sample' },
        // { id:12,ces_id: 45, sample_barcode: 'CM094102002', container_type: "EDTA_9ml",collection_type:'Blood',collect_date:'31-01-2020',collect_time:'14:34',time_elapsed:302,constances_id:'13122020',late_status:'OK',label_status:'' }
    ];
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

    /*
     getSample(code:string)
     {
       return this.samples.find(x => x.sample_barcode == code);
     }  

    getExpectedSamples(){ return this.samples;}

    addSample (sample: Sample): void {
    console.log('addSample' +sample.sample_barcode); 
    this.samples.push(sample);
    this.emitSubject();
    }

  updateSample (sample: Sample): void {
    console.log('updateSample' +sample.sample_barcode); 
   this.samples = this.samples.filter((value,key)=>{
    if(value.sample_barcode == sample.sample_barcode) {
        value.constances_id   = sample.constances_id;
        value.container_type  = sample.container_type;
        value.collection_type = sample.collection_type;
        value.time_elapsed    = sample.time_elapsed;
      }
    return true;
  });
  this.emitSubject();
  }

  deleteSample (barcode: string): void {
    console.log('deleteSample' +barcode);  
    this.samples = this.samples.filter((value,key)=>{
      return value.sample_barcode != barcode; });
      this.emitSubject();
  }
*/

}