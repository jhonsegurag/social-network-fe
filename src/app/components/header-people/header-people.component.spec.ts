import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPeopleComponent } from './header-people.component';

describe('HeaderPeopleComponent', () => {
  let component: HeaderPeopleComponent;
  let fixture: ComponentFixture<HeaderPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
