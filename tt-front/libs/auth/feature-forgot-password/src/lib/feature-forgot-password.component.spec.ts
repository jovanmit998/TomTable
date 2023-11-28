import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureForgotPasswordComponent } from './feature-forgot-password.component';

describe('FeatureForgotPasswordComponent', () => {
  let component: FeatureForgotPasswordComponent;
  let fixture: ComponentFixture<FeatureForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureForgotPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
