import { ChangeDetectorRef, Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { trim } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ExpectedSample } from '../models/sample.model';
// import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { AuthService } from '../services/auth.service';
import { SampleService } from '../services/sample.service';


  @Component({
    selector: 'app-open-box',
    templateUrl: './open-box.component.html',
    styleUrls: ['./open-box.component.scss']
  })
export class OpenBoxComponent implements OnInit {
  currentUser:string = 'rchaibi';
  currentBox:string=null;
  scanBarcode=null;
  dataSource = new MatTableDataSource<ExpectedSample>();
  displayedColumns: string[] = ['constances_id', 'sample_barcode','collection_type','container_type','collect_date','time_elapsed','scan_datetime','scan_by','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog:MatDialog, private authService: AuthService, private sampleService:SampleService,
    private toastr: ToastrService,private changeDetectorRefs: ChangeDetectorRef){
  }

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   }

   openBox(currentBoxValue: string){
    this.currentBox=currentBoxValue;
    this.refresh();
    this.toastr.success('', 'Box '+currentBoxValue+' is opened', {timeOut: 3000,positionClass : "toast-top-center"});
   }

   closeBox(){
    this.currentBox=null;
   }

   addScanSample(barcode: string){
     if(barcode!=null && barcode.trim().length>0)
     {
      const scanSample=this.fillSample(barcode.trim());
      if(scanSample == null || scanSample.sample_barcode == null) 
      {
        this.toastr.error('Please re-scan the sample', 'Error when inserting '+barcode, {timeOut: 3000,positionClass : "toast-top-center"});
        return null;
      }
      this.addRowData(scanSample);
      this.scanBarcode=null;
     }
   }

   fillSample(barcode: string):ExpectedSample{    
    var prefix = barcode.trim().substring(0,2);
    var scanSample =  new ExpectedSample();

    switch (prefix.toUpperCase()) {
      case 'BS':
              scanSample.container_type='SST_8ml';
              scanSample.collection_type='Blood';
          break;
      case 'CN':
              scanSample.container_type='Hep_8ml';
              scanSample.collection_type='Blood';
          break;
      case 'CM':
            scanSample.container_type='EDTA_9ml';
            scanSample.collection_type='Blood';
          break;
      case 'CP':
              scanSample.container_type='Urine_Ztube_10ml';
              scanSample.collection_type='Urine';
          break;
      default:
        return null;
          break;
     }
     scanSample.sample_barcode=barcode.toUpperCase();
     scanSample.scan_by=this.currentUser;
     scanSample.scan_datetime= new Date();
    return scanSample;
   }

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
  
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {width: '300px', data:obj });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){this.addRowData(result.data);}
      else if(result.event == 'Update'){this.updateRowData(result.data);}
      else if(result.event == 'Delete'){this.deleteRowData(result.data);}
    });
  }

  addRowData(row_obj){
    this.sampleService.addexpectedSample(row_obj).subscribe();
    this.loadData();
  }

  updateRowData(row_obj){
    this.sampleService.updateexpectedSample(row_obj).subscribe();
    this.loadData();
  }
  
  deleteRowData(row_obj){
    this.sampleService.deleteexpectedSample(row_obj).subscribe();
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  public loadData() { 
    this.sampleService.getexpectedSample().subscribe((data: ExpectedSample[]) => {
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
   }

}