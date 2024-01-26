import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCommComponent } from './http-comm.component';

describe('HttpCommComponent', () => {
  let component: HttpCommComponent;
  let fixture: ComponentFixture<HttpCommComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpCommComponent]
    });
    fixture = TestBed.createComponent(HttpCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
