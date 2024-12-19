import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPublishComponent } from './posts-publish.component';

describe('PostsPublishComponent', () => {
  let component: PostsPublishComponent;
  let fixture: ComponentFixture<PostsPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsPublishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
