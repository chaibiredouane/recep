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

  ncCode = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.ncCode.hasError('required')) {
      return 'You must enter a value';
    }
  }
  sample_id = new FormControl('', [Validators.required]);
  getLabelErrorMessage() {
    if (this.sample_id.hasError('required')) {
      return 'You must enter a value';
    }
  }
  constructor(
    public dialogRef: MatDialogRef<DialogNcDataComponent>
    // @Optional() is used to prevent error if no data is passed
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcDataService
     ,private datePipe: DatePipe
    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;  
    }

  doAction(){
    if(this.action=='Add')
    {
      this.local_data.create_date=this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){this.dialogRef.close({event:'Cancel'});}

  isDisableForm():boolean{ return (this.ncCode.invalid || this.sample_id.invalid) && this.action != 'Delete';}
}
