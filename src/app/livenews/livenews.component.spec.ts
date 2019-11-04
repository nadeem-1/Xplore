import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivenewsComponent } from './livenews.component';

describe('LivenewsComponent', () => {
  let component: LivenewsComponent;
  let fixture: ComponentFixture<LivenewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivenewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
