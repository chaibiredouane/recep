import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DialogNcConditionComponent } from '../dialog-nc-condition/dialog-nc-condition.component';
import { NcCondition } from '../models/ncCondition.model';
import { NcConditionService } from '../services/ncCondotion.service';

@Component({
  selector: 'app-nc-condition',
  templateUrl: './nc-condition.component.html',
  styleUrls: ['./nc-condition.component.css']
})
export class NcConditionComponent implements OnInit {
  dataSource = new MatTableDataSource<NcCondition>();
  displayedColumns: string[] = ['nc_code','nc_condition','nc_apply_by','create_date','update_date','nc_comment','is_active','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(public dialog:MatDialog, private ncService:NcConditionService,private changeDetectorRefs: ChangeDetectorRef,
    private toastr: ToastrService){}

  ngOnInit() {this.refresh();}
  refresh() {
    this.ncService.getAll().subscribe((data: NcCondition[]) => {
      this.dataSource = new MatTableDataSource<NcCondition>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.changeDetectorRefs.detectChanges();
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
    const dialogRef = this.dialog.open(DialogNcConditionComponent, {width: '450px', data:obj});

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
