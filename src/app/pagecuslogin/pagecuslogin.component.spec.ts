import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecusloginComponent } from './pagecuslogin.component';

describe('PagecusloginComponent', () => {
  let component: PagecusloginComponent;
  let fixture: ComponentFixture<PagecusloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecusloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecusloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
