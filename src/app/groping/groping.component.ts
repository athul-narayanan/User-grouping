import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';


@Component({
  selector: 'app-groping',
  templateUrl: './groping.component.html',
  styleUrls: ['./groping.component.scss']
})
export class GropingComponent implements OnInit {
  userDetailsList : any = [];
   editEnabled = true;
   picurl: string;
   sortBy : any;
  constructor(private service:SharedService) { 
    this.picurl = '';
    this.service.getUserDetails().subscribe(userDetails=>{
       this.userDetailsList = userDetails;
       this.addSelectedParameter()
    },error=>{

    })
  }

  ngOnInit(): void {
  }

  addSelectedParameter(){
    this.userDetailsList.forEach((userDetail:any)=>{
        userDetail['selected'] = false
    })
  }

  sortByName(){
    if(this.sortBy === 'asc'){
      this.userDetailsList.sort((item1:any,item2:any)=>{
       
        if (item1.name < item2.name) {
          return -1;
        }
        if (item1.name > item2.name) {
          return 1;
        }

        return 0;
      
    })
  }else{
    this.userDetailsList.sort((item1:any,item2:any)=>{
       
      if (item1.name < item2.name) {
        return 1;
      }
      if (item1.name > item2.name) {
        return -1;
      }

      return 0;
    
  })
  }
}

}
