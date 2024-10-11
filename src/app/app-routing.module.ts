import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { MessagingComponent } from './messaging/messaging.component'

const routes: Routes = [
  { path: '', redirectTo: '/messaging', pathMatch: 'full' },
  { path: 'messaging', component: MessagingComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}