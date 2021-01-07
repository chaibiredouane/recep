import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DialogSampleComponent } from '../dialog-sample/dialog-sample.component';
import { Sample } from '../models/sample.model';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  dataSource = new MatTableDataSource<Sample>();
  displayedColumns: string[] = ['id','constances_id','sample_barcode','sample_id_lims','ces_id','box_id','collect_datetime','scan_datetime','abort_reason','scan_by','source','detail','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(public dialog:MatDialog, private sampleService:SampleService,private toastr: ToastrService){}

  ngOnInit() {this.refresh();}
  refresh() {
    this.sampleService.getSamples().subscribe((data: Sample[]) => {
      this.dataSource = new MatTableDataSource<Sample>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogSampleComponent, {width: '450px', data:obj});

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){this.addRowData(result.data);}
      else if(result.event == 'Update'){this.updateRowData(result.data);}
      else if(result.event == 'Delete'){this.deleteRowData(result.data);}
    });
  }

   addRowData(row_obj){
    this.sampleService.addSample(row_obj).subscribe();
    this.refresh();
  }

  updateRowData(row_obj){
     this.sampleService.updateSample(row_obj).subscribe();
    this.refresh();
  }
  
  deleteRowData(row_obj){
    this.sampleService.deleteSample(row_obj).subscribe();
    this.refresh();
  }


}
