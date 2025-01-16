import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperProfileComponent } from './stepper-profile.component';

describe('StepperProfileComponent', () => {
  let component: StepperProfileComponent;
  let fixture: ComponentFixture<StepperProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
