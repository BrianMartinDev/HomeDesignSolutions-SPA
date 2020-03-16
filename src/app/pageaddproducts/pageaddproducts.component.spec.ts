import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaddproductsComponent } from './pageaddproducts.component';

describe('PageaddproductsComponent', () => {
  let component: PageaddproductsComponent;
  let fixture: ComponentFixture<PageaddproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageaddproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageaddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
