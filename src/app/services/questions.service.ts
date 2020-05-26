import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { questionPool } from  '../data/question-pool.data';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

   constructor(
	  	public navCtrl: NavController,
    	private router: Router,
	) { }

 
}
