import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback } from '../share/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  feedback: Feedback;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      phone: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      message: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.feedback = this.form.value;
    console.log(this.feedback);
    this.form.reset({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  }

}
