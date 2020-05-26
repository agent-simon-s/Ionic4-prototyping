import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { filter, map } from 'rxjs/operators';
import { Observable }      from 'rxjs';
import { FlurryService } from '../services/flurry.service';
//import { QuestionService } from  '../services/ngguide.question.service';
//import { QuestionBase } from  '../data/ngguide.QuesBase.class';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( 
  	public storage: Storage,
  	private flurry: FlurryService 
  ) {}

	public flurryEvtTest(evt){
		console.log(` click flurryTest ${evt}`);
		let eventString = `Button Click ${evt}`;
		this.flurry.logit(eventString);
	}

	ngOnInit() {
		
		console.log(`[home] accepted check:`);

		// this.router.events.pipe( filter(event => event instanceof ActivationEnd && event.snapshot.children.length == 0) ).subscribe((event: ActivationEnd) => {
		//   	//console.log(event.snapshot.data);
		//   	this.questions.routeData = event.snapshot.data;
		//   	this.questions.$caleSection = this.questions.routeData['rscale'];
		//   	console.log( `~ my route.rscale = ${this.questions.routeData['rscale']}` );
		// 	});

		//   	this.flurry.logit('dinner time', function() {
		//     console.log('Nice!');
		// }, function(err) {
		//     console.error(['WTF?', err]);
		// });

		this.flurry.logit('welcome', '(+)home', '(-)home');

		//console.info(this.flurry.fa);
	}
}
