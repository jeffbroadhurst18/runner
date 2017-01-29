import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ selector: '[myBackground]' })
export class BackgroundDirective {
    constructor(el: ElementRef) {
        this.al = el;
        this.test = 0;
        // el.nativeElement.style.color = 'red';
    }

    @Input() highlightColor:string;

    al: ElementRef;
    test: Number;

    @HostListener('mouseenter') onMouseEnter() {
        if (this.test == 0) {
            this.highlight(this.highlightColor || 'blue');
            this.test = 1;
        }
        else{
            this.highlight('red');
            this.test = 0;
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.al.nativeElement.style.color = color;
    }
}