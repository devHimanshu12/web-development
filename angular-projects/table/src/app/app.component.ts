import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchInput = new FormControl("")
  filteredUsers:any;

  users:any[]=[{
    id:123565845,
    email:'bbc@gmail.com'
  },
    {
    id:123,
    email:'abc@gmail.com'
  },{
    id:1234,
    email:'xyz@hotmail.com'
  },{
    id:12345,
    email:'jsgsbh@kk.com'
  },{
    id:123456,
    email:'test@gmail.com'
  }]
  searchValue:any

  ngOnInit(){
  // this.filteredUsers = this.users
  this.searchInput.valueChanges.subscribe(val =>{
    console.log(val)
    this.searchValue = val
  })}

  sortTable(key:string){
    if(key === 'id'){
    this.users.sort((a,b)=> a.id - b.id)
    }
    if(key === 'email'){
    this.users.sort((a,b) => {
        if(a.email > b.email){
          return 1
        }
        if(a.email < b.email){
          return -1
        }
        return 0
      } )
    }
  }
}
