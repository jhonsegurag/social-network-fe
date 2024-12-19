import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTimelineComponent } from './header-timeline.component';

describe('HeaderTimelineComponent', () => {
  let component: HeaderTimelineComponent;
  let fixture: ComponentFixture<HeaderTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
