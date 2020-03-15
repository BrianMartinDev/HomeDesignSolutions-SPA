import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagestoreComponent } from './pagestore.component';

describe('PagestoreComponent', () => {
  let component: PagestoreComponent;
  let fixture: ComponentFixture<PagestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
