import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NcDataService } from '../services/ncData.service';

@Component({
  selector: 'app-dialog-nc-data',
  templateUrl: './dialog-nc-data.component.html',
  styleUrls: ['./dialog-nc-data.component.css']
})
export class DialogNcDataComponent {
  action:string;
  local_data:any;
  currentUser:String ='Current User Account';
  constructor(
    public dialogRef: MatDialogRef<DialogNcDataComponent>
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcDataService
     ,private datePipe: DatePipe
    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;  
    }

  doAction(){
    console.log(' nc_code : '+this.local_data.nc_code);
    
    this.local_data.create_by=this.currentUser;
    if(this.action=='Add')
    {
      this.local_data.create_date=this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
      this.local_data.status='Created';
    }
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){this.dialogRef.close({event:'Cancel'});}
}
