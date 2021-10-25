import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RxTranslateModule } from '@rxweb/translate';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    SharedModule,
    RxTranslateModule.forRoot({
      cacheLanguageWiseObject: true,
      globalFilePath:
        'assets/i18n/{{language-code}}/global.{{language-code}}.json',
      filePath:
        'assets/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json',
    }),
  ],
  providers: [RxTranslateModule],
  exports: [RxTranslateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
