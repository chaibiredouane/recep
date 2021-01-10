import { DatePipe } from '@angular/common';
import { Component, Inject, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { NcInfoService } from '../services/ncInfo.service';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;
  statusSelected:String;
  listStatus = [{value: "OK", label: "OK"},{value: "KO",label: "KO"},{value: "", label: "NO DATA"}];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcInfoService
     ,private datePipe: DatePipe) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action; 
      this.statusSelected=this.local_data.status??"";
    }

  doAction(){
    console.log('scan_datetime : '+this.local_data.scan_datetime);
    this.dialogRef.close({event:this.action,data:this.local_data});}

  closeDialog(){this.dialogRef.close({event:'Cancel'});}

  selectedCategory(event: MatSelectChange) {
    this.statusSelected = event.value;
    this.local_data.status=event.value;
  }

  dateChanged(eventDate: string,source:String): Date | null {
    let dt= !!eventDate ? new Date(eventDate) : null;

    switch (source) {
      case 'expected_delivery_date':
        this.local_data.expected_delivery_date=this.datePipe.transform(dt, 'yyyy-MM-dd HH:mm:ss');
          break;
      case 'scan_datetime':
        this.local_data.scan_datetime=this.datePipe.transform(dt, 'yyyy-MM-dd HH:mm:ss');
          break;
      default:
          console.log(source+" not existing!");
          break;
      }
    return dt;
  }

}
