import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      mobile: '',
      dateOfBirth: ''
    });
  }

  save(){
    console.log(this.studentForm);
    console.log('saved: ' + JSON.stringify(this.studentForm.value));
  }
}
