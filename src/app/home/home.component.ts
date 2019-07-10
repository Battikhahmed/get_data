import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { data, Datum } from '../model/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataapi :DataapiService,) { }
table:data;
user:Datum;
  ngOnInit() {
  }
  getdata()
  {

    this.dataapi.getuserinfo().subscribe(
    data =>{
      this.table=data;
    
        console.log(this.table);
      }
    )
  }

}
