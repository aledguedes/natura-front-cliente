import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarcategoriaComponent } from './buscarcategoria.component';

describe('BuscarcategoriaComponent', () => {
  let component: BuscarcategoriaComponent;
  let fixture: ComponentFixture<BuscarcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
