import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorisJSComponent } from './moris-js.component';

describe('MorisJSComponent', () => {
  let component: MorisJSComponent;
  let fixture: ComponentFixture<MorisJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorisJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorisJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
