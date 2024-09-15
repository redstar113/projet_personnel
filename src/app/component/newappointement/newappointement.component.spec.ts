import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappointementComponent } from './newappointement.component';

describe('NewappointementComponent', () => {
  let component: NewappointementComponent;
  let fixture: ComponentFixture<NewappointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewappointementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewappointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
