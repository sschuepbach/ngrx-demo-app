import {Directive, Input} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';

@Directive({
  selector: '[appConnectForm]'
})
export class ConnectFormDirective {

  @Input('connectForm')
  set data(val: any) {
    if (val) {
      this.formGroupDirective.form.patchValue(val);
      this.formGroupDirective.form.markAsPristine();
      console.log(this.formGroupDirective.form);
    }
  }

  constructor(private formGroupDirective: FormGroupDirective) { }

}
