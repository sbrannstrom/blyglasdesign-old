import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuktorisationPage } from './auktorisation.page';

describe('AuktorisationPage', () => {
  let component: AuktorisationPage;
  let fixture: ComponentFixture<AuktorisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuktorisationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuktorisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
