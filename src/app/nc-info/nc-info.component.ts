import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NcInfo } from '../models/ncInfo';
import { NcInfoService } from '../services/ncInfo.service';

@Component({
  selector: 'app-nc-info',
  templateUrl: './nc-info.component.html',
  styleUrls: ['./nc-info.component.css']
})
export class NcInfoComponent implements OnInit {
  dataSource = new MatTableDataSource<NcInfo>();
  displayedColumns: string[] = ['nc_code','nc_display','nc_lims_display','sample_types','fr_translation','category','is_manual','is_form','is_deviation','to_be_display','is_active','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog:MatDialog, private ncInfoService:NcInfoService,private changeDetectorRefs: ChangeDetectorRef,
    private toastr: ToastrService){
  }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.ncInfoService.getAll().subscribe((data: NcInfo[]) => {
      this.dataSource.data = data;
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
    this.ncInfoService.addRow(row_obj).subscribe();
    this.refresh();
  }

  updateRowData(row_obj){
     this.ncInfoService.updateRow(row_obj).subscribe();
    this.refresh();
  }
  
  deleteRowData(row_obj){
    this.ncInfoService.deleteRow(row_obj).subscribe();
    this.refresh();
  }

}
