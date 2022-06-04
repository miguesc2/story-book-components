import './mylabel.css'

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
  allCaps?: boolean,
  /**
   * Colores del botón
  */
  color?: "primary" | "secondary" | "tertiary",
  /**
   * Color personalizados
  */
  fontColor?: string,
  /**
   * Color personalizados
  */
  backgroundColor?: string 
} 

export const MyLabel = ({ 
  label = 'No Label', 
  size = 'normal', 
  allCaps = false, 
  color = "primary", 
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span className={`label ${ size } text-${ color }`} style={{ color: fontColor, backgroundColor }}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel