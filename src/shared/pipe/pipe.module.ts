import { NgModule } from '@angular/core';
import { UpperPipe } from './upper.pipe';

@NgModule({
  declarations: [UpperPipe],
  exports: [UpperPipe],
})
export class PipeModule {}
