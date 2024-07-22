import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchModalComponent } from './watch-modal.component';

describe('WatchModalComponent', () => {
  let component: WatchModalComponent;
  let fixture: ComponentFixture<WatchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
