import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTalkComponent } from './open-talk.component';

describe('OpenTalkComponent', () => {
  let component: OpenTalkComponent;
  let fixture: ComponentFixture<OpenTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
