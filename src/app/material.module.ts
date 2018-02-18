import { NgModule } from '@angular/core'
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCheckboxModule } from '@angular/material'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCheckboxModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCheckboxModule]
})

export class MaterialModule {}
