import { Component, OnInit } from '@angular/core';
import { MyserviceService} from "../myservice.service";

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  todaydate;
  newcomponentproperty;
  newcomponent="new component is here";
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
