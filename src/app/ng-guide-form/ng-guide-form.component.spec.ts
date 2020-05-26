import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgGuideFormComponent } from './ng-guide-form.component';

describe('NgGuideFormComponent', () => {
  let component: NgGuideFormComponent;
  let fixture: ComponentFixture<NgGuideFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuideFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgGuideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
