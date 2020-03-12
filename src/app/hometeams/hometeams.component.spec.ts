import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometeamsComponent } from './hometeams.component';

describe('HometeamsComponent', () => {
  let component: HometeamsComponent;
  let fixture: ComponentFixture<HometeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
