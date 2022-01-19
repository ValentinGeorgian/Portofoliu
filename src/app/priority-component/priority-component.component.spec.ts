import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityComponentComponent } from './priority-component.component';

describe('PriorityComponentComponent', () => {
  let component: PriorityComponentComponent;
  let fixture: ComponentFixture<PriorityComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
