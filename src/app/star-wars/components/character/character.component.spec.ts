import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    component.props = { name: 'Asd', isLight: true };
    fixture.detectChanges();
  });

  // commented as to find something to do with test cases in language translations
  // it('should create character component card', () => {
  //   expect(component).toBeTruthy();
  // });
});
