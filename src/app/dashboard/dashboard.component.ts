import { Component, OnInit, Inject } from '@angular/core';
interface ITableData {
  [key: string]: { [key: string]: number }[];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // cities array
  public cities = ['chennai', 'bangalore', 'hyderabad', 'mumbai', 'pune'];

  public selectedCity: string = '';

  public isModalOpen: boolean = false;
  public tableData: ITableData = {
    chennai: [
      { item1: 101, item2: 201, item3: 401 },
      { item1: 1223, item2: 232, item3: 409 },
    ],
    mumbai: [
      { item1: 134, item2: 245, item3: 455 },
      { item1: 199, item2: 288, item3: 477 },
    ],
    bangalore: [{ item1: 0, item2: 0, item3: 0 }],
    hyderabad: [{ item1: 0, item2: 0, item3: 0 }],
    pune: [{ item1: 0, item2: 0, item3: 0 }],
  };

  public selectedCityData: { [key: string]: number }[] = [];

  constructor() {}
  // Select city dropdown
  public onCityChange(e: any) {
    console.log(e);
    this.selectedCityData = this.tableData[this.selectedCity];
  }
  // Select city dropdown end

  ngOnInit(): void {
    this.selectedCity = this.cities[0];
    // passing data to table
    this.selectedCityData = this.tableData[this.selectedCity];
  }

  // Deleting a record from a table
  onDelete(e: any) {
    console.log(e);
    const currentIndex = e;
    this.selectedCityData.splice(currentIndex, 1);
    this.tableData[this.selectedCity] = this.selectedCityData;
  }
  // Deleting a record from a table end

  // modal Open
  onAdd() {
    this.isModalOpen = true;
  }
  // modal Open end

  //modal close
  handleModalCancel(e: any) {
    this.isModalOpen = false;
  }
  //modal close end

  // Adding data to table

  handleSave(modalData: any) {
    console.log(modalData);
    this.selectedCityData.push({ ...modalData });
    this.tableData[this.selectedCity] = this.selectedCityData;
    this.isModalOpen = false;
  }
  // Adding data to table end
}
