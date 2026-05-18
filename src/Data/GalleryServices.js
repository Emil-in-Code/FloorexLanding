import hero from '../Assets/ServiceDetail/hero.webp'
import pulido1 from '../Assets/ServiceDetail/pulido1.webp'
import pulido2 from '../Assets/ServiceDetail/pulido2.webp'
import pulido3 from '../Assets/ServiceDetail/pulido3.webp'
import pulido4 from '../Assets/ServiceDetail/pulido4.webp'

//--------DEPORTIVOS---------------//
import heroTennis from '../Assets/ServiceDetail/deportivo.webp' 
import deportivo1 from '../Assets/ServiceDetail/deportivo1.webp'
import deportivo2 from '../Assets/ServiceDetail/deportivo2.webp'
import deportivo3 from '../Assets/ServiceDetail/deportivo3.webp'

//------EPÓXICOS------------------//
import heroEpo from '../Assets/ServiceDetail/heroEpo.webp'
import epoxi1 from '../Assets/ServiceDetail/epoxi1.webp'
import epoxi2 from '../Assets/ServiceDetail/epoxi2.webp'
import epoxi3 from '../Assets/ServiceDetail/epoxi3.webp'
import epoxi4 from '../Assets/ServiceDetail/epoxi4.webp'
import epoxi5 from '../Assets/ServiceDetail/epoxi5.webp'

//-------CEMENTICIO--------------//
import heroCementicio from '../Assets/ServiceDetail/heroCementicio.webp'
import cementicio1 from '../Assets/ServiceDetail/cementicio1.webp'
import cementicio2 from '../Assets/ServiceDetail/cementicio2.webp'
import cementicio3 from '../Assets/ServiceDetail/cementicio3.webp'
import cementicio4 from '../Assets/ServiceDetail/cementicio4.webp'
//-------SUPERFICIES-------------//
import heroSuper from '../Assets/ServiceDetail/superficie4.webp'
import superficie1 from '../Assets/ServiceDetail/superficie1.webp'
import superficie2 from '../Assets/ServiceDetail/superficie2.webp'
import superficie3 from '../Assets/ServiceDetail/superficie3.webp'
import superficie5 from '../Assets/ServiceDetail/superficie5.webp'
//------SEÑALÉTICA--------------//
import heroSeña from '../Assets/ServiceDetail/heroSeña.webp'
import seña1 from '../Assets/ServiceDetail/seña1.webp'
import seña2 from '../Assets/ServiceDetail/seña2.webp'
import seña3 from '../Assets/ServiceDetail/seña3.webp'
import seña4 from '../Assets/ServiceDetail/seña4.webp'
import seña5 from '../Assets/ServiceDetail/seña5.webp'


export const servicesImg = { 
  pulidos: {
    id:1,
    hero: hero,
    gallery: [pulido1, pulido2, pulido3, pulido4]
  },

  deportivo: {
    id:2,
    hero: heroTennis,
    gallery:[deportivo3,deportivo1,deportivo2,heroTennis]
  },

  epoxico: {
    id:3,
    hero: heroEpo,
    gallery:[epoxi1,epoxi2,epoxi3,epoxi4,epoxi5]
  },

  cementicio: {
    id:4,
    hero: cementicio4,
    gallery:[cementicio1,cementicio2,cementicio3,cementicio4,heroCementicio]
  },

  superficies: {
    id:5,
    hero: heroSuper,
    gallery:[superficie1,superficie2,superficie3,superficie5]
  },

  señaletica: {
    id:6,
    hero: heroSeña,
    gallery:[seña1,seña2,seña3,seña4,seña5]
  }
}
