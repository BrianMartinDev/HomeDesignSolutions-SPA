import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageemployeeportalComponent } from './pageemployeeportal.component';

describe('PageemployeeportalComponent', () => {
  let component: PageemployeeportalComponent;
  let fixture: ComponentFixture<PageemployeeportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageemployeeportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageemployeeportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
