import styles from "./AboutUs.module.css";
// Importamos SplitText desde tu barril de componentes
import { SplitText } from "../index.js"; 

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
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
          />
          <br />
          <SplitText
            text="Trabajamos en todo tipo de pisos industriales y comerciales, vimos soluciones que 
            prometían y fallaban, y decidimos que había que hacerlo bien de una vez. Por eso creamos
            FloorEx: para ofrecer soluciones definitivas para pisos, con claridad, energía y responsabilidad."
            delay={30}
            splitType="words"
          />
        </div> 

        <div className={styles.subtexto}>
          <span className={styles.vision}>VISIÓN:</span><br />
          <SplitText
            text="Buscamos darte soluciones definitivas para los pisos industriales y comerciales, creando superficies eficientes y duraderas; con ideas claras y responsabilidad técnica para cada proyecto."
            delay={30}
            splitType="words"
          />
        </div>

        <div className={styles.subtexto}> 
          <span className={styles.misionSpan}>MISIÓN:</span><br />
          <SplitText
            text="Posicionarnos en el mercado como referentes en la aplicación de soluciones definitivas para pisos industriales y comerciales, creando superficies para toda la vida."
            delay={30}
            splitType="words"
          />
        </div>
      </div>
    </section>
  );
}



/*
import styles from "./AboutUs.module.css"

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className= {styles.subtexto}>Sobre<span className= {styles.span}>Nosotros</span></h2>
        <p className={styles.introduction}> Trabajamos en
           todo tipo de pisos industriales y comerciales, vimos soluciones que prometían y fallaban,
           y decidimos que había que hacerlo bien de una vez.
           Por eso creamos FloorEx: para ofrecer soluciones definitivas para pisos, con claridad,
          energía y responsabilidad. Porque un piso bien hecho no es un gasto, es una herramienta que
          trabaja para el cliente toda la vida.
        </p> 
        <p className={styles.vision}>
          <span className={styles.visionSpan}>VISIÓN:</span><br />
          Buscamos darte soluciones definitivas para los pisos industriales y comerciales, creando <br />
          superficies eficientes y duraderas; con ideas claras y responsabilidad técnica para cada proyecto.
        </p>
        <p className={styles.mision}> 
          <sapn className={styles.misionSpan}>MISIÓN:</sapn><br />
          Posicionarnos en el mercado como referentes en la aplicación de soluciones definitivas para pisos 
          industriales y comerciales,  <br />creando superficies para toda la vida.
        </p>
      </div>
    </section>

  )
};*/
