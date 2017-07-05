//Framework artifacts
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MdCardModule, MdIconModule, MdProgressSpinnerModule} from '@angular/material';
import {MdButtonToggleModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdListModule} from '@angular/material';


@NgModule({
  imports: [
      BrowserAnimationsModule,
      MdCardModule,
      FlexLayoutModule,
      MdButtonToggleModule,
      MdButtonModule,
      MdInputModule,
      MdToolbarModule,
      MdListModule,
      MdIconModule,
      MdProgressSpinnerModule,
    ],
  exports: [
    BrowserAnimationsModule,
    MdCardModule,
    FlexLayoutModule,
    MdButtonToggleModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdProgressSpinnerModule,
  ]
})

export class AppMaterialModule { }