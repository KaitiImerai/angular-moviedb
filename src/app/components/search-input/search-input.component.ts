import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent implements OnInit{

  
  searchKeword = '';
  
  searchFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]);
  
  matcher = new MyErrorStateMatcher();
  
  @Input() SearchInputValue: string = "";
  @Output() SearchInputValueChange = new EventEmitter();

  ngOnInit() {      

  }

}