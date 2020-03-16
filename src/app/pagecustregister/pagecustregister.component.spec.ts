import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecustregisterComponent } from './pagecustregister.component';

describe('PagecustregisterComponent', () => {
  let component: PagecustregisterComponent;
  let fixture: ComponentFixture<PagecustregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecustregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecustregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
