import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Dictionary } from '../models/dictionary.model';
import { NcDataService } from '../services/ncData.service';
import { NcInfoService } from '../services/ncInfo.service';

@Component({
  selector: 'app-dialog-nc-data',
  templateUrl: './dialog-nc-data.component.html',
  styleUrls: ['./dialog-nc-data.component.css']
})
export class DialogNcDataComponent {
  action:string;
  local_data:any;
  currentUser:String ='Current User Account';
  ncCodeSelected:String;
  listNcCode:Dictionary[]=[];
  // =['NoFasting','Menstru','NoFridge','NoCentri','FormInput'];
  constructor(
    public dialogRef: MatDialogRef<DialogNcDataComponent>
     ,@Optional() @Inject(MAT_DIALOG_DATA) public data: NcDataService
     ,private datePipe: DatePipe,private ncInfoService:NcInfoService    ) 
    {
      this.local_data = {...data};
      this.action = this.local_data.action;
      this.ncCodeSelected=this.local_data.nc_code??"";
      // this.ncInfoService.getListNcCodeWithId(this.local_data==null || this.local_data.sample_id==null?0:this.local_data.sample_id).subscribe(data => this.listNcCode = data);
      this.ncInfoService.getListNcCode().subscribe(data => this.listNcCode = data);
    }

  doAction(){
    this.local_data.create_by=this.currentUser;
    if(this.action=='Add')
    {
      this.local_data.create_date=this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
      this.local_data.status='Created';
    }
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){this.dialogRef.close({event:'Cancel'});}

  ncSelected(event: MatSelectChange) {
    this.ncCodeSelected = event.value;
    this.local_data.nc_code=this.ncCodeSelected;
  }
  ncCode = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.ncCode.hasError('required')) {
      return 'You must enter a value';
    }
  }
  sampleId = new FormControl('', [Validators.required]);
  getLabelErrorMessage() {
    if (this.sampleId.hasError('required')) {
      return 'You must enter a value';
    }
  }
  isDisableForm():boolean{ return (this.ncCode.invalid  || this.sampleId.invalid) && this.action != 'Delete';}
  
}
