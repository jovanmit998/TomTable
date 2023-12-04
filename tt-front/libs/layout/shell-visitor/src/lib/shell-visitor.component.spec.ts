import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellVisitorComponent } from './shell-visitor.component';

describe('ShellVisitorComponent', () => {
  let component: ShellVisitorComponent;
  let fixture: ComponentFixture<ShellVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellVisitorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
