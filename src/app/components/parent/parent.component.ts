import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {



  name:string
  idvalue:boolean

  submit(){
    this.idvalue=true
  }

}
