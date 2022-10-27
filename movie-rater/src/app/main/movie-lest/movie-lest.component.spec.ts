import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLestComponent } from './movie-lest.component';

describe('MovieLestComponent', () => {
  let component: MovieLestComponent;
  let fixture: ComponentFixture<MovieLestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieLestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
