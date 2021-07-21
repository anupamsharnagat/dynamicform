import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientImpListComponent } from './client-imp-list.component';

describe('ClientImpListComponent', () => {
  let component: ClientImpListComponent;
  let fixture: ComponentFixture<ClientImpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientImpListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientImpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
