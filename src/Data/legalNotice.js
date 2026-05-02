export const LEGAL_LAST_UPDATED = "1 de mayo de 2026";

export const RESPONSIBLE = {
  name: "Joaquin Flor",
  dni: "0924791882",
  trade: "Floorex",
  address: "Calle larga y luis cordero, puerta 8,CP 46017 Cuenca, Ecuador",
  email: "floorex.ec@gmail.com",
  website: "floorex.com.ec",
  activity:"arreglo de pisos insustriales y comerciales",
};

export const LegalSections =[
  {
    id: "Condiciones-de-uso",
    number: "1",
    title: "Condiciones de uso",
    content:`El acceso y uso de este sitio web atribuye la condición de usuario, 
             aceptando desde dicho acceso las presentes condiciones de uso.
             El usuario se compromete a hacer un uso adecuado de los contenidos del sitio web y a no emplearlos para:`,
    list: [
      "Incurrir en actividades ilícitas o contrarias a la buena fe.",
      "Difundir contenidos ilegales o contrarios al orden público",
      "Provocar daños en los sistemas del titular o de terceros",
    ],

  },
  {
    id: "Responsabilidad",
    number: "2",
    title: "Responsabilidad",
    content:"El titular no se hace responsable de:",
    list: [
      "El mal uso que se realice del contenido del sitio web",
      "Los daños derivados del uso de la información contenida",
      "La disponibilidad o continuidad del sitio web",
    ],

  },
  {
    id: "Enlaces-externos",
    number: "3",
    title: "Enlaces Externos",
    content:`:Este sitio web puede contener enlaces a plataformas externas como WhatsApp o redes sociales.
              El titular no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios,
              siendo responsabilidad del usuario revisar las condiciones de uso de los mismos.`,
  },
  {
    id:"Propiedad-intelectual",
    number:"4",
    title:"Propiedad intelectual",
    content:`Todos los contenidos del sitio web (textos, imágenes, diseño, etc.) 
             son propiedad del titular o cuentan con licencia, quedando prohibida su reproducción sin autorización.`,
  },
  {
    id:"Información-comercial",
    number:"5",
    title:"Información comercial",
    content:`La información comercial mostrada en este sitio web tiene carácter meramente informativo 
             y no constituye una oferta vinculante. 
             La contratación de proudctos de seguro se realiza fuera del sitio web, 
             estando sujeta a las condiciones específicas de la aseguradora correspondiente.
             El titular actúa como mediador de seguros.`,
  }, 
]
