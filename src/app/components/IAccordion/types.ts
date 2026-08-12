import { Type } from '@angular/core';

export interface IAccordionItem {
    title: string; 
    description?: string | Type<unknown>;
    disabled?: boolean;
    key: IAccordionKey;
    activeInitially?: boolean;
}

export type IAccordionContentVariants = "text" | "html";

export interface IAccordionColorData {
    bg?: string; 
    text?: string;
}

export interface IAccordionColor {
    active?: IAccordionColorData;
    deactive?: IAccordionColorData;
    disabled?: IAccordionColorData;
}

export type IAccordionData = IAccordionItem[];

export interface IAccordionOptions {
    showMultiple?: boolean;
    descriptionVariant?: IAccordionContentVariants;
    titleVariant?: IAccordionContentVariants;
    headColors?: IAccordionColor;
    descriptionColors?: Omit<IAccordionColor, 'deactive'>;
    headIsClickable?: boolean;
    
}

export interface IAccordionProps {
    data: IAccordionData;
    options?: IAccordionOptions;
}

export type IAccordionKey = string | number;