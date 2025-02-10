import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefCardComponent } from './chef-card.component';

describe('ChefCardComponent', () => {
  let component: ChefCardComponent;
  let fixture: ComponentFixture<ChefCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
