import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocManagmentComponent } from './doc-managment.component';

describe('DocManagmentComponent', () => {
  let component: DocManagmentComponent;
  let fixture: ComponentFixture<DocManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
