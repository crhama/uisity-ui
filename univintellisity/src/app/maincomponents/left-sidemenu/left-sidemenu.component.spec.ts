import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidemenuComponent } from './left-sidemenu.component';

describe('LeftSidemenuComponent', () => {
  let component: LeftSidemenuComponent;
  let fixture: ComponentFixture<LeftSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
