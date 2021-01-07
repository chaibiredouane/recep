import { Component, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-inconsistency',
  templateUrl: './inconsistency.component.html',
  styleUrls: ['./inconsistency.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InconsistencyComponent {

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Address>>;

  dataSource: MatTableDataSource<User>;
  dataSource2: MatTableDataSource<Address>;
  usersData: User[] = [];
  columnsToDisplay = ['name', 'email', 'phone'];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement: User | null;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    USERS.forEach(user => {
      // if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
      //   this.usersData = [...this.usersData, {...user, addresses: new MatTableDataSource(user.addresses)}];
      // } else {
      //   this.usersData = [...this.usersData, user];
      // }
      this.usersData = [...this.usersData, user];
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;
  }

  toggleRow(element: User) {
    console.log('Name : '+element.name);
    
    var found = TABLE2.filter(function(item) { return item.name === element.name; });
    if(found!=null && found.length>0 )
    {
    // element.addresses && (element.addresses as MatTableDataSource<Address>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.expandedElement = this.expandedElement === element ? null : element
    this.cd.detectChanges();
    this.dataSource2 = new MatTableDataSource(found);
    this.dataSource2.sort = this.sort;
    // this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).sort = this.innerSort.toArray()[index]);
    }
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).filter = filterValue.trim().toLowerCase());
  }
}

export interface User {
  name: string;
  email: string;
  phone: string;
  addresses?: Address[] | MatTableDataSource<Address>;
}

export interface Address {
  name:String;
  street: string;
  zipCode: string;
  city: string;
}

export interface UserDataSource {
  name: string;
  email: string;
  phone: string;
  addresses?: MatTableDataSource<Address>;
}

const USERS: User[] = [
  {
    name: "Mason",
    email: "mason@test.com",
    phone: "9864785214"
  },
  {
    name: "Redouane",
    email: "RED@ONE.com",
    phone: "12345678990"
  },
  {
    name: "Eugene",
    email: "eugene@test.com",
    phone: "8786541234",
  },
  {
    name: "Jason",
    email: "jason@test.com",
    phone: "7856452187"
  }
];

const TABLE2: Address[] = [
  {
        name: "Mason",
        street: "Street 1",
        zipCode: "78542",
        city: "Kansas"
  },
  {
        name: "Mason",
        street: "Street 2",
        zipCode: "78554",
        city: "Texas"
  },
  {
        name: "Jason",
        street: "Street 5",
        zipCode: "23547",
        city: "Utah"
  },
  {
        name: "Jason",
        street: "Street 5",
        zipCode: "23547",
        city: "Ohio"
  },
  {
    name: "Redouane",
    street: "paris",
    zipCode: "75001",
    city: "paris"
},
{
  name: "Redouane",
  street: "Luxembourg",
  zipCode: "33-1",
  city: "Dudelange"
},
{
  name: "Redouane",
  street: "Germany",
  zipCode: "54456",
  city: "Trier"
}
];