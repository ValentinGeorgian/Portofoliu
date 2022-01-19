import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2componentComponent } from './game2component.component';

describe('Game2componentComponent', () => {
  let component: Game2componentComponent;
  let fixture: ComponentFixture<Game2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game2componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
