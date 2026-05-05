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
      canonical: `${BASE_URL}/seguros/decesos`,
    },
    detail:
    `
      <p>Es el Seguro de Decesos que tú y tu familia necesitáis, porque llegado el momento, 
        es la forma de asegurarte que no tengan que preocuparse por nada, porque con <br>
        <em>Preventiva VIVO</em>, tu tranquilidad y la de los tuyos es lo que más nos
        importa.
      </p>
      <h2>Coberturas Incluídas</h2>
      <ul>
        <li>
          <h3>Traslado completo</h3>
          <article>Gestión y gastos desde cualquier parte del mundo al cementerio elegido en España. Incluye gastos de acompañante (hasta 1.500€) y retorno de menores.</article>
        </li>
        <li>
          <h3>Asistenecia psicológica</h3>
          <article>Orientación y apoyo profesional en momentos de crisis o angustia tras la pérdida.</article>
        </li>
        <li> 
          <h3>Asistenecia al servicio funerario</h3>
          <article>Apoyo total a la familia desde el primer momento hasta el final del servicio.</article>
        </li>
        <li>
          <h3>Testamento abierto Notarial</h3>
          <article>Asistencia web/telefónica y firma ante notario (incluso a domicilio si hay movilidad reducida).</article>
        </li>
        <li>
          <h3>Testamento vital</h3>
          <article>Asesoría legal para dejar instrucciones sobre cuidados de salud y destino final del cuerpo u órganos.</article>
        </li>
        <li>
          <h3>Gestiones jurídicas</h3>
          <article>Tramitación de herencias, pensiones y redacción de documentos ante cualquier organismo.</article>
        </li>
      </ul>`
  },
 
