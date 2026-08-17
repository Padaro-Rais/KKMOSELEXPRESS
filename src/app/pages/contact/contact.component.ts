import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { SeoService } from '../../shared/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(
    public dataService: DataService,
    private seoService: SeoService,
    private fb: FormBuilder
  ) {
    this.seoService.updateMeta(
      this.dataService.getPageMeta('contact')
    );

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.submitted = true;

    setTimeout(() => {
      this.contactForm.reset();
      this.submitted = false;
    }, 2000);
  }
}