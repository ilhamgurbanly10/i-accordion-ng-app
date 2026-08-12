import { Service, signal } from '@angular/core';
import { IAccordionProps, IAccordionOptions, IAccordionKey } from './types';
import { IAccordionInitialOptions } from "./data";

@Service()

export class MainService {

        allOptions = signal<Required<IAccordionOptions>>(IAccordionInitialOptions);
        activeIndexes = signal<IAccordionKey[]>([]);
        dataRes = signal<IAccordionProps["data"]>([])
    
        // activation
        toggle(key: IAccordionKey) {
            this.activeIndexes.update((previous) => { return this.isActive(key) ? [...previous.filter((item) => { return item !== key})] : [...(this.allOptions().showMultiple ? previous : []), key];})
        }
    
        isActive(key: IAccordionKey): boolean { return this.activeIndexes().some((item) => { return item === key }) }
        // end-activation
    
        // initializing
        initOptions(options: IAccordionOptions) {
             this.allOptions.set({ 
                headIsClickable: options?.headIsClickable !== undefined ? options?.headIsClickable : IAccordionInitialOptions.headIsClickable, 
                showMultiple: options?.showMultiple !== undefined ? options?.showMultiple : IAccordionInitialOptions.showMultiple, 
                descriptionVariant: options?.descriptionVariant ?? IAccordionInitialOptions.descriptionVariant, 
                titleVariant: options?.titleVariant ?? IAccordionInitialOptions.titleVariant, 
                headColors: {
                    active: {
                        bg: options?.headColors?.active?.bg ?? IAccordionInitialOptions.headColors?.active?.bg as string, 
                        text: options?.headColors?.active?.text ?? IAccordionInitialOptions.headColors?.active?.text as string
                    }, 
                    deactive: {
                        bg: options?.headColors?.deactive?.bg ?? IAccordionInitialOptions.headColors?.deactive?.bg as string, 
                        text: options?.headColors?.deactive?.text ?? IAccordionInitialOptions.headColors?.deactive?.text as string
                    }, 
                    disabled: {
                        bg: options?.headColors?.disabled?.bg ?? IAccordionInitialOptions.headColors?.disabled?.bg as string, 
                        text: options?.headColors?.disabled?.text ?? IAccordionInitialOptions.headColors?.disabled?.text as string
                    },
                }, 
                descriptionColors: {
                    active: {
                        bg: options?.descriptionColors?.active?.bg ?? IAccordionInitialOptions.descriptionColors?.active?.bg as string, 
                        text: options?.descriptionColors?.active?.text ?? IAccordionInitialOptions.descriptionColors?.active?.text as string
                    },  
                    disabled: {
                        bg: options?.descriptionColors?.disabled?.bg ?? IAccordionInitialOptions.descriptionColors?.disabled?.bg as string, 
                        text: options?.descriptionColors?.disabled?.text ?? IAccordionInitialOptions.descriptionColors?.disabled?.text as string
                    },
                }, 
             });
        }

        initActiveindexes(data: IAccordionProps["data"]) {
             this.activeIndexes.set(data?.filter((item) => item?.activeInitially ).map((item) => item.key));
        }
        // end- initializing

}
