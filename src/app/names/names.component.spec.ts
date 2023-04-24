import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesComponent } from './names.component';

describe('NamesComponent', () => {
  let component: NamesComponent;
  let fixture: ComponentFixture<NamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
