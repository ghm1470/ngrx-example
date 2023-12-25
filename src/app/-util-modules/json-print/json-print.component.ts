
import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
import {isNullOrUndefined} from '../../-utils/util-functions';

@Component({
  selector: 'app-json-print',
  template: `
      <div>
          <ng-content></ng-content>
          <pre #jsonPrintPre></pre>
      </div>`,
  styleUrls: ['./json-print.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class JsonPrintComponent implements OnInit, OnChanges {
  @Input() jsonStr;
  @ViewChild('jsonPrintPre', {static: true}) jsonPrintPre;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!isNullOrUndefined(this.jsonStr) && this.jsonStr !== '') {
      this.output(this.syntaxHighlight(this.jsonStr));
    }
  }

  output(inp): void {
    // this.jsonPrintDiv.nativeElement.appendChild(
    //   document.createElement('pre')
    //   // .setAttribute('width', '60')
    // ).innerHTML = inp;
    this.jsonPrintPre.nativeElement.innerHTML = inp;
  }

  syntaxHighlight(json): void {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }

}
