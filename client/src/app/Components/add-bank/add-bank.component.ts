import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  name:string = '';
  number: string = '';
  email: string = '';
  bankType: string ='';
  added: string ='';
  constructor(private http:Http) { }

  addBank(){
    this.http.post('http://localhost:3000/addbank',{
      name: this.name,
      email: this.email,
      brand: this.bankType,
      number: this.number
    }).subscribe((data)=>{
      let res = data.json();
    })

  }
  ngOnInit() {
  }

}
