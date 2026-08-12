import { Component, Input, ViewEncapsulation, OnInit, inject } from "@angular/core";
import { IAccordionProps, IAccordionOptions } from "./types";
import { NgClass, NgStyle } from '@angular/common';
import { MainService } from "./main.service";

@Component({
    selector: 'i-accordion', 
    standalone: true, 
    imports: [NgClass, NgStyle], 
    templateUrl: './template.html', 
    styleUrl: './styles.css', 
    encapsulation: ViewEncapsulation.Emulated,
})

export default class IAccordion implements OnInit {

    @Input() data: IAccordionProps["data"] = [];
    @Input() options: IAccordionOptions = {};
    readonly service = inject(MainService);

    ngOnInit() {
        this.service.initOptions(this.options);
        this.service.initActiveindexes(this.data);
    }

}
