import { Subscription } from 'rxjs';
import { Http ,Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  sub: Subscription;

  name:string ='';
  number:string ='';
  expiration_month: number ;
  expiration_year: number ;
  security_code: number;
  money: number
  paid: string = '';
  constructor(private http:Http) {
  }

  addCard(){
    let header = new Headers();
    header.append("Authorization", 'Basic cGtleV90ZXN0XzU3dm84OGhyeHpjcHp1aHp6cmc6');
    this.sub = this.http.post('https://vault.omise.co/tokens', {
      card: {
        "name": this.name,
        "number": this.number,
        "expiration_month": this.expiration_month,
        "expiration_year": this.expiration_year,
        "security_code": this.security_code,
      }
    },{headers: header}).subscribe((data)=>{
      let tokenID = data.json();
      console.log(tokenID.id);
      this.http.post('http://localhost:3000/pay',{
        tokenID: tokenID.id,
        amount: this.money
      }).subscribe((data)=>{
        let res = data.json();
        if(res.pay == "success"){
          this.paid = 'ชำระสำเร็จ';
        }
        console.log(res.pay)
      })
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
