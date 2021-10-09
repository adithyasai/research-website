import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusareasComponent } from './focusareas.component';

describe('FocusareasComponent', () => {
  let component: FocusareasComponent;
  let fixture: ComponentFixture<FocusareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
