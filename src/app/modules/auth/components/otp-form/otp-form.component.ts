import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-otp-form',
  standalone: true,
  imports: [InputOtpModule, IconComponent],
  templateUrl: './otp-form.component.html',
  styleUrl: './otp-form.component.scss',
})
export class OtpFormComponent extends SubmitCoreForm {
  @Output() isOtpVerified = new EventEmitter<boolean>(false);

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      otp: ['', [Validators.required]],
    });
  }
  checkOtpVerified() {
    this.isOtpVerified.emit(true);
  }
}
