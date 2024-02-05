import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModelComponent } from './details-model.component';

describe('DetailsModelComponent', () => {
  let component: DetailsModelComponent;
  let fixture: ComponentFixture<DetailsModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsModelComponent]
    });
    fixture = TestBed.createComponent(DetailsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
