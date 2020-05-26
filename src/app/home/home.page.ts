import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  	private flurry: FlurryService 
  ) {}

}
