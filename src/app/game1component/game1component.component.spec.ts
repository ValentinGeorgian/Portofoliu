import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1componentComponent } from './game1component.component';

describe('Game1componentComponent', () => {
  let component: Game1componentComponent;
  let fixture: ComponentFixture<Game1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game1componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Game1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
