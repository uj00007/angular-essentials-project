import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RxTranslateModule, RxTranslation } from '@rxweb/translate';
import { RxTranslateConfig } from '@rxweb/translate/interface/rx-translate-config';
import { AppComponent } from './app.component';
import { CharacterComponent } from './star-wars/components/character/character.component';
import { CreateCharacterComponent } from './star-wars/components/create-character/create-character.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [RxTranslation],
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [
        AppComponent,
        CharacterComponent,
        CreateCharacterComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-essentials-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-essentials-project');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content h1')?.textContent).toContain(
  //     'Essentials project Upcoming!!'
  //   );
  // });
});
