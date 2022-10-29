import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SnippetsComponent } from './snippets/snippets.component';

const routes = [
  { path: '', component: SnippetsComponent }
];

@NgModule({
  declarations: [
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SnippetsRoutingModule { }