import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ExpectedSample, Sample } from '../models/sample.model';
import { AuthService } from '../services/auth.service';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-expected-sample',
  templateUrl: './expected-sample.component.html',
  styleUrls: ['./expected-sample.component.css']
})
export class ExpectedSampleComponent  {
  dataSource = new MatTableDataSource<ExpectedSample>();
  currentDate = new Date();
  displayedColumns: string[] = ['ces_id','constances_id', 'sample_barcode', 'container_type','collection_type', 'collect_date','collect_time','time_elapsed','late_status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog:MatDialog, private authService: AuthService, private sampleService:SampleService
    ,private changeDetectorRefs: ChangeDetectorRef){
  }

  ngOnInit() {
    this.refresh();
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
  

  refresh() {
    this.sampleService.getexpectedSample().subscribe((data: ExpectedSample[]) => {
      this.dataSource.data = data;
      // this.dataSource = new MatTableDataSource(this.sampleService.getFromServer());
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
      });
  }

}
