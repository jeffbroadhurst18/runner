import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transformAge' })
export class TransformAgePipe implements PipeTransform {
    transform(input: number): string {
        switch(input) { 
                case 0: { return '0-9'; } 
                case 1: { return '10-19'; } 
                case 2: { return '20-29'; } 
                case 3: { return '30-39'; } 
                case 4: { return '40-49'; } 
                case 5: { return '50-59'; } 
                default: { return 'unknown'; } 
            } 
    }
}

@Pipe({ name: 'transformSex' })
export class TransformSexPipe implements PipeTransform {
    transform(input: number): string {
        switch(input) {
            case 0 : {return 'M';}
            case 1 : {return 'F'; }
            default : { return 'unknown'; }
         }
    }
}


@Pipe({name: 'transformBest'})
export class TransformBestPipe implements PipeTransform {
    mins : number;
    secs : number;
    displayMins : string;
    displaySecs : string;

    transform(input: number): string {
        this.mins = Math.floor(input/60);
        this.secs = input % 60;
        this.displayMins = this.mins < 10 ? '0'.concat(String(this.mins)) : String(this.mins);
        this.displaySecs = this.secs < 10 ? '0'.concat(String(this.secs)) : String(this.secs);
        return this.displayMins.concat(':').concat(this.displaySecs); 
    }
}
