import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

//export class Flurry.Service.TsService {
export class FlurryService {

	private your_app_key = environment.Flurry.your_app_key;

	private options: FlurryAnalyticsOptions = {
	 appKey: this.your_app_key, // REQUIRED
	 reportSessionsOnClose: true,
	 enableLogging: true
	}

  constructor(
    private storage: Storage, 
  	private flurryAnalytics: FlurryAnalytics 
  ){ }

  fa: FlurryAnalyticsObject = this.flurryAnalytics.create(this.options);

  //private fa: FlurryAnalyticsObject = this.flurryAnalytics.create(this.options);

	// this.fa.logEvent('flurryAnalytics inti').then(() => console.log('Logged an event!')).catch(e => console.log('Error logging the event', e));

  // fa = new FlurryAnalytics({ 
  //  appKey: this.your_app_key,
  //  reportSessionsOnClose: true,
  //  enableLogging: true
  // });


  // this.fa.init(this.your_app_key, this.options, function(){
  //     console.log('Initialised');
  // }, function(err) {
  //    console.error(['WTF?', err]);
  // });

  // fa.setUserId('OwnUser', function() {
  //     console.log('Cool!');
  // }, function(err) {
  //     console.error(['WTF?', err]);
  // });

  logit(msg, scs, err){
     console.warn(`~logit:`)
     // this.fa.logEvent( msg ).then(() => console.warn(`FA+ ${scs}`)).catch(e => console.error(`FA+ ${err}`, e));
     this.fa.logEvent(msg)
    .then(() => console.log(`Logged an event! ${scs}`))
    .catch(e => console.log(`Error logging the event: ${err}`, e));
  }
}





