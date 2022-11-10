import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {}

  myForm:FormGroup = this.fb.group({
    name:"",
    email:["",[Validators.email,Validators.required] ],
    message:["",Validators.required]
  });

  onSubmit(form:FormGroup){
    if (form.valid) {
      console.log(form.value)// form is valid do something
    }
  }
}
