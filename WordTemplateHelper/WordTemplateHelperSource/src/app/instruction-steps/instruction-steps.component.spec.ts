import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionStepsComponent } from './instruction-steps.component';

describe('InstructionStepsComponent', () => {
  let component: InstructionStepsComponent;
  let fixture: ComponentFixture<InstructionStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
