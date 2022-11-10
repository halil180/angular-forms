import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {


  

  myForm: FormGroup  = this.fb.group({
    email:["",Validators.min(3)],
    message:"",
    carrer:""
  });
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log)
  }






  // single
  favoriteColorControl = new FormControl('');
  updateName() {
    this.favoriteColorControl.setValue('pizza');
  }
  // single




  profileForm: FormGroup = this.fb.group({
    firstName:[""],
    lastName: ["",Validators.required],
  });


  onSubmit() {
    console.warn(this.profileForm.value);
  }
















  deneme = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.deneme.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  hero!:string;
}
