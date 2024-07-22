import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinModalComponent } from './coin-modal.component';

describe('CoinModalComponent', () => {
  let component: CoinModalComponent;
  let fixture: ComponentFixture<CoinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
