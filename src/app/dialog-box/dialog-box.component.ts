import { Component, Inject, Optional } from '@angular/core';
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
  manualSelected:string;
  formSelected:string;
  deviationSelected:string;
  displaySelected:string;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>
    // @Optional() is used to prevent error if no data is passed
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcInfoService
    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;  
      this.manualSelected=this.local_data.is_manual;
      this.formSelected=this.local_data.is_form; 
      this.deviationSelected=this.local_data.is_deviation;   
      this.displaySelected=this.local_data.to_be_display;     
    }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  changeManual(event: MatSelectChange) {
    this.manualSelected = event.value;
    this.local_data.is_manual=event.value;
  }
  changeDeviation(event: MatSelectChange) {
    this.deviationSelected = event.value;
    this.local_data.is_deviation=event.value;
  }
  changeDisplay(event: MatSelectChange) {
    this.displaySelected = event.value;
    this.local_data.to_be_display=event.value;
  }
  changeForm(event: MatSelectChange) {
    this.formSelected = event.value;
    this.local_data.is_form=event.value;
  }

}
