import { IAccordionOptions } from "./types";

export const IAccordionInitialOptions: Required<IAccordionOptions> = {
    showMultiple: true, 
    headIsClickable: true,
    descriptionVariant: "html", 
    titleVariant: "html",
    headColors: {
        active: {
            bg: '#1e40af', 
            text: '#ffffff'
        }, 
        deactive: {
            bg: '#2563eb', 
            text: '#ffffff'
        }, 
        disabled: {
            bg: 'gray', 
            text: '#ffffff'
        }, 
    }, 
    descriptionColors: {
        active: {
            bg: '#eff6ff', 
            text: '#1e3a8a'
        },
        disabled: {
            bg: '#9c9c9c', 
            text: '#ffffff'
        }, 
    }
}