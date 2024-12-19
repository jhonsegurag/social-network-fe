import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTimelineComponent } from './posts-timeline.component';

describe('PostsTimelineComponent', () => {
  let component: PostsTimelineComponent;
  let fixture: ComponentFixture<PostsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
