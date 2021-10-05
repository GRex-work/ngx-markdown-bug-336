import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-markdown-bug336';
  originalText = '*\u00A0This bullet doesn\'t bullet\n* This bullet does bullet';
  markdownNoConversion = '';
  convertedText = '';
  markdownConverted = '';

  constructor(private markdownService: MarkdownService) {};

  ngOnInit() {
    this.markdownNoConversion = this.markdownService.compile(this.originalText);
    this.convertedText = this.originalText.replace(/\u00A0/g, ' ');
    this.markdownConverted = this.markdownService.compile(this.convertedText);
  }
}
