import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScaleQuizFormComponent } from './scale-quiz-form.component';

describe('ScaleQuizFormComponent', () => {
  let component: ScaleQuizFormComponent;
  let fixture: ComponentFixture<ScaleQuizFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleQuizFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScaleQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
