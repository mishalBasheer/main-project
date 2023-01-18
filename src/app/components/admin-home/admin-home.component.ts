import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  mobile: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', mobile: 1.0079, email: 'Hsdsfsadfsdf'},
  {position: 2, name: 'Helium', mobile: 4.0026, email: 'He'},
  {position: 3, name: 'Lithium', mobile: 6.941, email: 'Li'},
  {position: 4, name: 'Beryllium', mobile: 9.0122, email: 'Be'},
  {position: 5, name: 'Boron', mobile: 10.811, email: 'B'},
  {position: 6, name: 'Carbon', mobile: 12.0107, email: 'C'},
  {position: 7, name: 'Nitrogen', mobile: 14.0067, email: 'N'},
  {position: 8, name: 'Oxygen', mobile: 15.9994, email: 'O'},
  {position: 9, name: 'Fluorine', mobile: 18.9984, email: 'F'},
  {position: 10, name: 'Neon', mobile: 20.1797, email: 'Ne'},
];

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'mobile', 'email','action'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
