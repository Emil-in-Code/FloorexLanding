import hero from '../Assets/ServiceDetail/hero.webp'
import pulido1 from '../Assets/ServiceDetail/pulido1.webp'
import pulido2 from '../Assets/ServiceDetail/pulido2.webp'
import pulido3 from '../Assets/ServiceDetail/pulido3.webp'
import pulido4 from '../Assets/ServiceDetail/pulido4.webp'

//--------DEPORTIVOS---------------//
import heroTennis from '../Assets/Images/deportivo.webp' 


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
export const servicesImg = { 
  pulidos: {
    id:1,
    hero: hero,
    gallery: [pulido1, pulido2, pulido3, pulido4]
  },

  deportivo: {
    id:2,
    hero: heroTennis,
    gallery:[]
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
}
