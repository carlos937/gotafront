import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoArtistaComponent } from './novo-artista.component';

describe('NovoArtistaComponent', () => {
  let component: NovoArtistaComponent;
  let fixture: ComponentFixture<NovoArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
