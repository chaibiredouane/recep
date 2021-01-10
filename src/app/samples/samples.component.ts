import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DialogNcDataComponent } from '../dialog-nc-data/dialog-nc-data.component';
import { DialogSampleComponent } from '../dialog-sample/dialog-sample.component';
import { NcData } from '../models/ncData.model';
import { Sample } from '../models/sample.model';
import { NcDataService } from '../services/ncData.service';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SamplesComponent implements OnInit {

  dataSource = new MatTableDataSource<Sample>();
  displayedColumns: string[] = ['id','constances_id','sample_barcode','sample_id_lims','ces_id','box_id','collect_datetime','scan_datetime','abort_reason','scan_by','source','detail','nc','action'];

  dataSource2: MatTableDataSource<NcData>;
  innerDisplayedColumns = ['id', 'sample_id', 'nc_code','status', 'user_comment', 'create_date','create_by','action'];
  expandedElement: Sample | null;
  data2: NcData[]=null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<NcData>>;
  @ViewChildren('paginator2') paginator2 = new QueryList<MatPaginator>();
  indexPaginator2:number;

  
  constructor(public dialog:MatDialog, private sampleService:SampleService,private toastr: ToastrService,
    private cd: ChangeDetectorRef, private ncDataService:NcDataService){}

  ngOnInit() {this.refresh();}
  refresh() {
    this.cd.detectChanges();
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
  // --------------------------------------Table 2 ---------------------------------------
  refresh2() {
    if(this.expandedElement== null) return;
    this.ncDataService.getById(this.expandedElement.id).subscribe((data: NcData[]) => {
      this.dataSource2 = new MatTableDataSource<NcData>(data);
      this.dataSource2.paginator = this.paginator2.toArray()[this.indexPaginator2];
      this.dataSource2.sort = this.sort;
      }); 
  }
  toggleRow(element: Sample,index:number) {
    this.indexPaginator2=index;
    if(element.id==null ||element.id<=0) return null;
    this.expandedElement = this.expandedElement === element ? null : element;
    this.cd.detectChanges();
    this.refresh2();
}
applyFilter2(filterValue: string) {
  this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<NcData>).filter = filterValue.trim().toLowerCase());
}

openDialog2(action,obj) {
  obj.action = action;
  if(action='Add'){
    obj.sample_id=this.expandedElement.id;
  }
  const dialogRef = this.dialog.open(DialogNcDataComponent, {width: '450px', data:obj});

  dialogRef.afterClosed().subscribe(result => {
    if(result.event == 'Add'){this.addRowData2(result.data);}
    else if(result.event == 'Update'){this.updateRowData2(result.data);}
    else if(result.event == 'Delete'){this.deleteRowData2(result.data);}
  });
}

 addRowData2(row_obj){
  this.ncDataService.addRow(row_obj).subscribe();
  this.refresh2();
}

updateRowData2(row_obj){
   this.ncDataService.updateRow(row_obj).subscribe();
  this.refresh2();
}

deleteRowData2(row_obj){
  this.ncDataService.deleteRow(row_obj).subscribe();
  this.refresh2();
}

}
