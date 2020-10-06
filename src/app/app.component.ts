import { Component } from '@angular/core';
  import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/MustMatch.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  employeeForm: FormGroup;
  employeeArray: FormArray;
  submitted=false
  constructor(private fb:FormBuilder) {
    this.employeeForm = this.fb.group({
      employeeArray: this.fb.array([ this.newEmployee() ])
    });
  }
 
  
  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      Password: ['',[Validators.required]],
      confirmpassword: ['',[Validators.required]],
      branchname: ['',[Validators.required]],
      branchcountry : ['',[Validators.required]],
      mobile: ['',[Validators.required,Validators.pattern((/^\(?([7-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/))]],
      branchAddress: ['',[Validators.required]],
      branchtype: ['',[Validators.required]],
      branchbusinessType: ['',[Validators.required]]

    },
    {
     validator: MustMatch('Password', 'confirmpassword')
 });
 }


  addEmployee(): void {
    this.employeeArray = this.employeeForm.get('employeeArray') as FormArray;
    console.log(this.employeeArray);
    this.employeeArray.push(this.newEmployee());
  }

  onSubmit(){
    this.submitted=true
    console.log(this.employeeForm.invalid);
    if(this.employeeForm.invalid){
      return
    }
  }
 
}
 
 
