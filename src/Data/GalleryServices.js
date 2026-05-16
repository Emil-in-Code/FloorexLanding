import hero from '../Assets/ServiceDetail/hero.webp'
import pulido1 from '../Assets/ServiceDetail/pulido1.webp'
import pulido2 from '../Assets/ServiceDetail/pulido2.webp'
import pulido3 from '../Assets/ServiceDetail/pulido3.webp'
import pulido4 from '../Assets/ServiceDetail/pulido4.webp'

//--------DEPORTIVOS---------------//
import heroTennis from '../Assets/Images/deportivo.webp' 

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
  }
}
