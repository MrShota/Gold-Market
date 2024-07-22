import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonModalComponent } from './maison-modal.component';

describe('MaisonModalComponent', () => {
  let component: MaisonModalComponent;
  let fixture: ComponentFixture<MaisonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisonModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaisonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
