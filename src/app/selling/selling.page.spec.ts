import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellingPage } from './selling.page';

describe('SellingPage', () => {
  let component: SellingPage;
  let fixture: ComponentFixture<SellingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
