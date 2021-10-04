import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUIComponent } from './admin-ui.component';
import { RouterModule } from '@angular/router';
import { AdminUIRoutes } from './admin-ui.routes';

@NgModule({
  declarations: [AdminUIComponent],
  imports: [CommonModule, RouterModule.forChild(AdminUIRoutes)],
})
export class AdminUiModule {}
