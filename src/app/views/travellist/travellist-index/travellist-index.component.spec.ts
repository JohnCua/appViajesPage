import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellistIndexComponent } from './travellist-index.component';

describe('TravellistIndexComponent', () => {
  let component: TravellistIndexComponent;
  let fixture: ComponentFixture<TravellistIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellistIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellistIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
