import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenoveringPage } from './renovering.page';

describe('RenoveringPage', () => {
  let component: RenoveringPage;
  let fixture: ComponentFixture<RenoveringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenoveringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenoveringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
