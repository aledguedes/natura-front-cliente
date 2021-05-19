import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpalavrachaveComponent } from './buscarpalavrachave.component';

describe('BuscarpalavrachaveComponent', () => {
  let component: BuscarpalavrachaveComponent;
  let fixture: ComponentFixture<BuscarpalavrachaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarpalavrachaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpalavrachaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
