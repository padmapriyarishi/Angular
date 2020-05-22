import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.less']
})
export class FormsReactiveComponent implements OnInit {

  projectForm : FormGroup

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup( {
      'projectName': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus' : new FormControl('critical')
    })
  }

  onSumbit() {
    console.log(this.projectForm.value)
  }


}
