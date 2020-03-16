import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecustsettingsComponent } from './pagecustsettings.component';

describe('PagecustsettingsComponent', () => {
  let component: PagecustsettingsComponent;
  let fixture: ComponentFixture<PagecustsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecustsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecustsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
