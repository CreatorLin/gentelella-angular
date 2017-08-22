import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJS2Component } from './chart-js2.component';

describe('ChartJS2Component', () => {
  let component: ChartJS2Component;
  let fixture: ComponentFixture<ChartJS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartJS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartJS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
