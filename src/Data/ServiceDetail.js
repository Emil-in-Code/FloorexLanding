import pulidos from '../Assets/ServiceDetail/pulidos.jpeg'

export const services = [
  { 
    id: 1, 
    title: "Pisos pulidos/abrillantados",
    text: "En cualquier espacio que necesite durabilidad, estética y bajo mantenimiento",
    image: pulidos,
    waMessage: "Hola, estoy interesado en el servicio de pisos pulidos/abrillantados ¿me podría dar más información?",
    badge:"más contratado", 
    seo: {
      title:"Piso pulido | durabilidad y bajo mantenimiento",
      description:`Solución 100% ecológica que garantiza larga durabilidad sin contaminar el medio ambiente 
                   ya que nuestro proceso no aplica capas superficiales que se desgastan con el uso;
                   pulimos el propio concreto con diamantes para lograr un brillo duradero, natural y sostenible.`,
      keywords:`pisos pulidos de cemento, pulido de hormigón,mejores empresas de pisos pulidos en Ecuador`,
      //og:image específica por servicio, tiene que ser de 1200 x 630 px
      ogImage: OG_IMAGE_DEFAULT,
      canonical: `${BASE_URL}/servicio/pulido`,
    },
    detail:
    `
      <p>Es el Seguro de Decesos que tú y tu familia necesitáis, porque llegado el momento, 
        es la forma de asegurarte que no tengan que preocuparse por nada, porque con <br>
        <em>Preventiva VIVO</em>, tu tranquilidad y la de los tuyos es lo que más nos
        importa.
      </p>
      <h2>¿Dónde se puede instalar?</h2>
      <ul>
        <li>
          <h3>Residencial</h3>
          <article>Elegancia moderna sin complicaciones.</article>
        </li>
        <li>
          <h3>Comercial</h3>
          <article>Imagen profesional que soporta alto tránsito.</article>
        </li>
        <li> 
          <h3>Industrial</h3>
          <article>Resistencia extrema para entornos exigentes.</article>
        </li>
        <li>
          <h3>Showrooms</h3>
          <article>Acabado brillante que realiza tus productos.</article>
        </li>
        <li>
          <h3>Restaurantes</h3>
          <article>Higiene, fácil limpieza y estilo inolvidable.</article>
        </li>
        <li>
          <h3>Hoteles</h3>
          <article>Primera impresión impecable, día tras día.</article>
        </li> 
        <li>
          <h3>Garajes</h3>
          <article>Adiós al polvo y a las manchas difíciles.</article>
        </li> 
        <li>
          <h3>Supermercados</h3>
          <article>Seguro antideslizante y limpieza rápida.</article>
        </li>
      </ul>`
  },
 
