import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesArtistaComponent } from './detalhes-artista.component';

describe('DetalhesArtistaComponent', () => {
  let component: DetalhesArtistaComponent;
  let fixture: ComponentFixture<DetalhesArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
