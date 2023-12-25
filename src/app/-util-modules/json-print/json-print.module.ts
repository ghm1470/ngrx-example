import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JsonPrintComponent} from './json-print.component';


@NgModule({
  declarations: [JsonPrintComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JsonPrintComponent
  ]
})
export class JsonPrintModule {
}
