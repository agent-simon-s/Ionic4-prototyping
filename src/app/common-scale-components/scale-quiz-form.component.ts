import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { QuestionsService } from '../services/questions.service';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { FlurryService } from '../services/flurry.service';

@Component({
  selector: 'app-cmn-scale-quiz-form',
  templateUrl: './scale-quiz-form.component.html',
  styleUrls: ['./scale-quiz-form.component.scss'],
})
export class ScaleQuizFormComponent implements OnInit {

	myQuizForm: FormGroup;


  constructor(
  	 private router: Router,
  	 private fb: FormBuilder,
     private questions: QuestionsService,
     private flurry: FlurryService
  	) { }

  ngOnInit() {
  	this.myQuizForm = this.fb.group({
  		email:'',
  		questions: this.fb.array([this.addQuestionGrp()])
  	})

  	// this.myQuizForm.valueChanges.subscribe(console.log)
  }

  get quesArray(){
  	//return this.myForm.get('questions') as FormArray
  	return <FormArray>this.myQuizForm.get('questions')
  }

  addQuestionGrp(){
  	return this.fb.group({
  		answer:[]
  	});
  }

}
