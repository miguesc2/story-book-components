/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizar
    */
    allCaps?: boolean;
    /**
     * Colores del botón
    */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Color personalizados
    */
    fontColor?: string;
    /**
     * Color personalizados
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
