import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistratonPageComponent } from './user-registraton-page.component';

describe('UserRegistratonPageComponent', () => {
  let component: UserRegistratonPageComponent;
  let fixture: ComponentFixture<UserRegistratonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistratonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistratonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
