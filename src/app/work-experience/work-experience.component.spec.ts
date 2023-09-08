import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceComponent } from './work-experience.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
//se añadio para hacer test del modulo de cliente.

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperienceComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
