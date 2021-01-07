import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NcConditionService } from '../services/ncCondotion.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog-nc-condition',
  templateUrl: './dialog-nc-condition.component.html',
  styleUrls: ['./dialog-nc-condition.component.css']
})
export class DialogNcConditionComponent {
  action:string;
  local_data:any;
  activeSelected:String;

  ncCode = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.ncCode.hasError('required')) {
      return 'You must enter a value';
    }
  }
  nc_condition = new FormControl('', [Validators.required]);
  getLabelErrorMessage() {
    if (this.nc_condition.hasError('required')) {
      return 'You must enter a value';
    }
  }
  constructor(
    public dialogRef: MatDialogRef<DialogNcConditionComponent>
    // @Optional() is used to prevent error if no data is passed
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcConditionService
     ,private datePipe: DatePipe
    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;  
      this.activeSelected=this.local_data.is_active=="1"?"Enable":"Desiable";
    }

  doAction(){
    if(this.action=='Add')
    {
      this.local_data.create_date=this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
    if(this.action=='Update')
    {
      this.local_data.update_date=this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){this.dialogRef.close({event:'Cancel'});}

  toggleActive(event: MatSlideToggleChange) {
    this.local_data.is_active=event.checked==true?1:0;
    this.activeSelected = event.checked?"Enable":"Disable";
  }
  isChecked(str:string):boolean{return str==='Enable';}
  isDisableForm():boolean{ return (this.ncCode.invalid || this.nc_condition.invalid) && this.action != 'Delete';}

}
