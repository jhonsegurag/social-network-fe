import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdatePageComponent } from './profile-update-page.component';

describe('ProfileUpdatePageComponent', () => {
  let component: ProfileUpdatePageComponent;
  let fixture: ComponentFixture<ProfileUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
