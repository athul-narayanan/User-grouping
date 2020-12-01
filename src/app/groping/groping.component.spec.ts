import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GropingComponent } from './groping.component';

describe('GropingComponent', () => {
  let component: GropingComponent;
  let fixture: ComponentFixture<GropingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GropingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GropingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
