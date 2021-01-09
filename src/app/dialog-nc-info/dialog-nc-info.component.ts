import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NcInfoService } from '../services/ncInfo.service';

@Component({
  selector: 'app-dialog-nc-info',
  templateUrl: './dialog-nc-info.component.html',
  styleUrls: ['./dialog-nc-info.component.css']
})
export class DialogNcInfoComponent  {

  action:string;
  local_data:any;
  manualSelected:string;
  formSelected:string;
  deviationSelected:string;
  displaySelected:string;
  activeSelected:boolean=false;
  labelActive:string;
  categorySelected:string="";

  ncCode = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.ncCode.hasError('required')) {
      return 'You must enter a value';
    }
  }
  ncLabel = new FormControl('', [Validators.required]);
  getLabelErrorMessage() {
    if (this.ncLabel.hasError('required')) {
      return 'You must enter a value';
    }
  }
  constructor(
    public dialogRef: MatDialogRef<DialogNcInfoComponent>
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcInfoService
    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;  
      this.manualSelected=this.local_data.is_manual=="1"?"Enable":"Desiable";
      this.formSelected=this.local_data.is_form=="1"?"Enable":"Desiable"; 
      this.deviationSelected=this.local_data.is_deviation=="1"?"Enable":"Desiable";   
      this.displaySelected=this.local_data.to_be_display=="1"?"Enable":"Desiable";    
      this.activeSelected=this.local_data.is_active==1?true:false;   
      this.labelActive=this.activeSelected?" Enable ":" Disable";
      this.categorySelected=this.local_data.category??"";
    }

  doAction(){this.dialogRef.close({event:this.action,data:this.local_data});}

  closeDialog(){this.dialogRef.close({event:'Cancel'});}

  changeCategory(event: MatSelectChange) {
    this.categorySelected = event.value;
    this.local_data.category=event.value;
  }

  toggleManual(event: MatSlideToggleChange) {
  this.local_data.is_manual=event.checked==true?1:0;
  this.manualSelected=event.checked?"Enable":"Disable";
  }
  toggleForm(event: MatSlideToggleChange) {
  this.local_data.is_form=event.checked==true?1:0;
  this.formSelected=event.checked?"Enable":"Disable";
}
toggleDeviation(event: MatSlideToggleChange) {
  this.local_data.is_deviation=event.checked==true?1:0;
  this.deviationSelected=event.checked?"Enable":"Disable";
}
toggleDisplay(event: MatSlideToggleChange) {
  this.local_data.to_be_display=event.checked==true?1:0;
  this.displaySelected=event.checked?"Enable":"Disable";
}
toggleActive(event: MatSlideToggleChange) {
  this.activeSelected = event.checked;
  this.local_data.is_active= event.checked==true?1:0;
  this.labelActive=this.activeSelected?"Enable":"Disable";
}

isChecked(str:string):boolean {return str==='Enable';}
isDisableForm():boolean{ return (this.ncCode.invalid || this.ncLabel.invalid) && this.action != 'Delete';}

}
