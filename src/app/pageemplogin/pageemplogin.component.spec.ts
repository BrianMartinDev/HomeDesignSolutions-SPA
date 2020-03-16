import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageemploginComponent } from './pageemplogin.component';

describe('PageemploginComponent', () => {
  let component: PageemploginComponent;
  let fixture: ComponentFixture<PageemploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageemploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageemploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
