import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutdecComponent } from './inoutdec.component';

describe('InoutdecComponent', () => {
  let component: InoutdecComponent;
  let fixture: ComponentFixture<InoutdecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutdecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
