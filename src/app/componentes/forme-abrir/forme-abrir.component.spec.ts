import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeAbrirComponent } from './forme-abrir.component';

describe('FormeAbrirComponent', () => {
  let component: FormeAbrirComponent;
  let fixture: ComponentFixture<FormeAbrirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeAbrirComponent]
    });
    fixture = TestBed.createComponent(FormeAbrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
