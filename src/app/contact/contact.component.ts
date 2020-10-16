import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(2), Validators.maxLength(25)],
      phone: ['', Validators.required, Validators.pattern],
      email: ['', Validators.required, Validators.email],
      message: ''
    });
  }

  ngOnInit(): void {
  }

}
