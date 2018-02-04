import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';

import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS } from '@ngx-material-keyboard/core';

const customLayouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  'Daniel Layout': {
    'name': 'Portugues Brasil',
    'keys': [
      [
        ['1', '!'],
        ['2', '@'],
        ['3', '#'],
        ['4', '$'],
        ['5', '%'],
        ['6', '¨'],
        ['7', '&'],
        ['8', '*'],
        ['9', '('],
        ['0', ')']
      ],
      [
        ['Á', ''],
        ['Ã', ''],
        ['É', ''],
        ['Ê', ''],
        ['Í', ''],
        ['Ó', ''],
        ['Õ', ''],
        ['Ô', ''],
        ['Ú', '']
      ],
      [
        ['Q', ''],
        ['W', ''],
        ['E', ''],
        ['R', ''],
        ['T', ''],
        ['Y', ''],
        ['U', ''],
        ['I', ''],
        ['O', ''],
        ['P', ''],
        ['Backspace', 'Backspace']
      ],
      [
        ['A', ''],
        ['S', ''],
        ['D', ''],
        ['F', ''],
        ['G', ''],
        ['H', ''],
        ['J', ''],
        ['K', ''],
        ['L', ''],
        ['Ç', ''],
        ['Enter', 'Enter']
      ],
      [
        ['Shift', 'Shift'],
        ['Z', ''],
        ['X', ''],
        ['C', ''],
        ['V', ''],
        ['B', ''],
        ['N', ''],
        ['M', '']
      ],
      [
        [' ', ' ']
      ]
    ],
    'lang': ['pt']
  },
  'Numeric Layout': {
    'name': 'numeric',
    'keys': [[['1', '1'], ['2', '2'], ['3', '3']],
    [['4', '4'], ['5', '5'], ['6', '6']],
    [['7', '7'], ['8', '8'], ['9', '9']],
    [['Backspace', 'Backspace'], ['0', '0'], ['Enter', 'Enter']]],
    'lang': ['numeric']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatKeyboardModule
  ],
  providers: [
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLayouts }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
