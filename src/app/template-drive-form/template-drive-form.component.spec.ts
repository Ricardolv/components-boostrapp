import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveFormComponent } from './template-drive-form.component';

describe('TemplateDriveFormComponent', () => {
  let component: TemplateDriveFormComponent;
  let fixture: ComponentFixture<TemplateDriveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDriveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
