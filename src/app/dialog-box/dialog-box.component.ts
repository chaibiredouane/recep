import { Component, Inject, Optional } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NcInfoService } from '../services/ncInfo.service';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcInfoService
    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;  
      // this.manualSelected=this.local_data.is_manual=="1"?"Enable":"Desiable";
    }

  doAction(){this.dialogRef.close({event:this.action,data:this.local_data});}

  closeDialog(){this.dialogRef.close({event:'Cancel'});}


  // toggleManual(event: MatSlideToggleChange) {
  // this.local_data.is_manual=event.checked==true?1:0;
  // this.manualSelected=event.checked?"Enable":"Disable";
  // }

}
