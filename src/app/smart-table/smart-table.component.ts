import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TableDataService } from './table-data.service';
import { TableData } from './table-data';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html'
})
export class SmartTableComponent implements OnInit {
settings = {
  actions: {
    add:false,
    edit:false,
    delete:false
  },
  //hideHeader:true,
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
 //[actions.add:false
};

  constructor(private tds:TableDataService) { }

  ngOnInit() {
    
  }

}
