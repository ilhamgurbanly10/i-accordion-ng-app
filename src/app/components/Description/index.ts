import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'description',
    standalone: true, 
    imports: [NgStyle],
    templateUrl: './template.html'
})

export class Description {
    @Input() desc: string = "";
}