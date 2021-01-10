import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Box } from '../models/box.model';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  dataSource = new MatTableDataSource<Box>();
  displayedColumns: string[] = ['id','ces_id','expected_delivery_date','box_barcode','scan_datetime','scan_by','status','opened_by','temp_status','nb_forms','import_process_id','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(public dialog:MatDialog, private ncService:BoxService,private cd: ChangeDetectorRef,
    private toastr: ToastrService){}

  ngOnInit() {this.refresh();}
  refresh() {
    this.cd.detectChanges();
    this.ncService.getAll().subscribe((data: Box[]) => {
      this.dataSource = new MatTableDataSource<Box>(data);
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
    const dialogRef = this.dialog.open(DialogBoxComponent, {width: '450px', data:obj});

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){this.addRowData(result.data);}
      else if(result.event == 'Update'){this.updateRowData(result.data);}
      else if(result.event == 'Delete'){this.deleteRowData(result.data);}
    });
  }

   addRowData(row_obj){
    this.ncService.addRow(row_obj).subscribe();
    this.refresh();
  }

  updateRowData(row_obj){
     this.ncService.updateRow(row_obj).subscribe();
    this.refresh();
  }
  
  deleteRowData(row_obj){
    this.ncService.deleteRow(row_obj).subscribe();
    this.refresh();
  }
}
