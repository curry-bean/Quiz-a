import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIntermediateComponent } from './js-intermediate.component';

describe('JsIntermediateComponent', () => {
  let component: JsIntermediateComponent;
  let fixture: ComponentFixture<JsIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsIntermediateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
