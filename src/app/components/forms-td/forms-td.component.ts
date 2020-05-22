import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.less']
})
export class FormsTdComponent implements OnInit {

  subscriptions: any[] = []
  pass: string = ''
  emailID: string = ''
  selectedSub: string = ''
  submitted: boolean = false
  comments : string = ''
  commentsLength : boolean = false
  @ViewChild('myForm') signUpForm: NgForm
  postLength: any;
  validTextLength: number;
  x: any;
  match: RegExp;
  markText: string;
  replaced: any;
  maxLength = 20


  constructor() { 

  }

  ngOnInit(): void {
    this.subscriptions = ["Basic", "Advanced", "Pro"]
    this.selectedSub = 'Advanced'
    
    
  }

  onSubmit() {
    console.log('Submitted', this.signUpForm)
    this.submitted = true
    this.emailID = this.signUpForm.value.email
    this.pass = this.signUpForm.value.password
    this.selectedSub = this.signUpForm.value.subscription
    this.signUpForm.reset()
  }

  onCommentsChange(event : any) {
    this.comments = event
   
      // if (this.comments!== null) {
      //   this.postLength = this.comments.length;
      //   this.validTextLength = 10 - this.postLength;
      //   console.log(this.postLength)
      //   if (this.postLength > 10) {
      //     this.x = event.value.substring(10, this.postLength);
      //     console.log(this.x);
      //     this.match = new RegExp(this.x, 'ig');
      //     this.markText = '<mark>' + this.x + '<\/mark>';
      //     this.replaced = this.comments.replace(this.match, this.markText);
      //     this.comments = this.replaced
      //   }
      // }
  }

}
