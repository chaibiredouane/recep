import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-dialog-sample',
  templateUrl: './dialog-sample.component.html',
  styleUrls: ['./dialog-sample.component.css']
})
export class DialogSampleComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogSampleComponent>
    // @Optional() is used to prevent error if no data is passed
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: SampleService
     ,private datePipe: DatePipe
    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;  
    }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){this.dialogRef.close({event:'Cancel'});}

  isDisableForm():boolean{ return false;}

}
