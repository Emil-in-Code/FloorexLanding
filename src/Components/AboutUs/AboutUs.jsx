import styles from "./AboutUs.module.css";
import { SplitText } from "../index.js"; 

export default function AboutUs() {
  return (

    <section className={styles.aboutSection}>
      <div className={styles.gradientBg}></div>
      <div className={styles.aboutContainer}>
        
        {/* Título animado */}
        <h2 className={styles.subtexto}>
          <SplitText 
            text="Sobre Nosotros" 
            delay={50} 
            role="heading"
          />
        </h2>

        {/* Introducción */}
        <div className={styles.subtexto}>
          <SplitText
            text='FloorEx es nueva, pero nuestra experiencia no.
            Antes de lanzar la empresa, invertimos años acumulando horas de aprendizaje en obra, 
            en cursos especializados y en contacto directo con proveedores de calidad.'
            delay={30}
            splitType="words" // "words" queda mejor para textos largos que "chars"
            tag="div"
          />
          <br />
          <SplitText
            text="Trabajamos en todo tipo de pisos industriales y comerciales, vimos soluciones que 
            prometían y fallaban, y decidimos que había que hacerlo bien de una vez. Por eso creamos
            FloorEx: para ofrecer soluciones definitivas para pisos, con claridad, energía y responsabilidad."
            delay={30}
            splitType="words"
            tag="div"
          />
        </div> 

        <div className={styles.subtexto}>
          <h3 className={styles.subtexto}>
            <SplitText 
              text="VISIÓN" 
              delay={50} 
              tag="span"
            />
          </h3>
          <SplitText
            text="Buscamos darte soluciones definitivas para los pisos industriales y comerciales, creando superficies eficientes y duraderas; con ideas claras y responsabilidad técnica para cada proyecto."
            delay={30}
            splitType="words"
            tag="div"
          />
        </div>


        <div className={styles.subtexto}> 
          <h3 className={styles.subtexto}>
            <SplitText 
              text="MISIÓN" 
              delay={50} 
              role="heading"
              tag="span"
            />
          </h3>
          <SplitText
            text="Posicionarnos en el mercado como referentes en la aplicación de soluciones definitivas para pisos industriales y comerciales, creando superficies para toda la vida."
            delay={30}
            splitType="words"
            tag="div"
          />
        </div>
      </div>
    </section>
  );
}




