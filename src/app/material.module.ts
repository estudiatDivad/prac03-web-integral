import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const myModules: any = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  MatToolbarModule
];

@NgModule({
  imports: [myModules],
  exports: [myModules],
})
export class MaterialModule {}
