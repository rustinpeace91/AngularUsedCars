import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule
} from '@angular/material';
/*import {MatMenuModule, MatMenu} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';*/


@NgModule({

    imports: [
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatSidenavModule,
      MatTabsModule,
      MatCardModule
      
    ],

    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatCardModule
    ],
    
    declarations: []

  })
  export class MaterialModule{
      
  }