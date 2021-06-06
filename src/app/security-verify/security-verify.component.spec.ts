import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityVerifyComponent } from './security-verify.component';

describe('SecurityVerifyComponent', () => {
  let component: SecurityVerifyComponent;
  let fixture: ComponentFixture<SecurityVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
