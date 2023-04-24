import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBasicComponent } from './js-basic.component';

describe('JsBasicComponent', () => {
  let component: JsBasicComponent;
  let fixture: ComponentFixture<JsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
