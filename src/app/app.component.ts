import { Component , OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements   OnInit {
  title = 'app';
  constructor(
    private sanitizer: DomSanitizer,

  ) {}
  gcsesearch: SafeHtml;
  ngOnInit() {
    this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml('<gcse:search></gcse:search>');

    const cx = '016820916711928902111:qw0kgpuhihm';
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }
}
