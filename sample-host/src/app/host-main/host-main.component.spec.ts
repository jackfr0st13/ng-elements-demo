import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostMainComponent } from './host-main.component';

describe('HostMainComponent', () => {
  let component: HostMainComponent;
  let fixture: ComponentFixture<HostMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
