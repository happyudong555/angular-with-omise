import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recipients',
  templateUrl: './list-recipients.component.html',
  styleUrls: ['./list-recipients.component.css']
})
export class ListRecipientsComponent implements OnInit {

  recipients: any;
  recipientID: any;
  amount: number;
  constructor(private http:Http) {
    this.listRecipient();
  }

  listRecipient(){
    this.http.post('http://localhost:3000/listRe',{})
    .subscribe((data)=>{
      let res = data.json();
      this.recipients = res.data;
      console.log(this.recipients)
    })
  }

  selectRecipient(id:any){
    this.recipientID = id;
  }

  transfer(){
    this.http.post('http://localhost:3000/transfer',{
      amount: this.amount,
      recipient: this.recipientID
    }).subscribe((data)=>{
      let res = data.json();
      console.log(res);
    })
  }
  ngOnInit() {
  }

}
