import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopupBusCardPage } from './topup-bus-card.page';

describe('TopupBusCardPage', () => {
  let component: TopupBusCardPage;
  let fixture: ComponentFixture<TopupBusCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupBusCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopupBusCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
