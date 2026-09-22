import stay1 from "@/assets/stay-1.jpg";
import stay2 from "@/assets/stay-2.jpg";
import stay3 from "@/assets/stay-3.jpg";
import stay4 from "@/assets/stay-4.jpg";

export type Listing = {
  id: string;
  title: string;
  location: string;
  country: string;
  category: string;
  image: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  amenities: string[];
  host: { name: string; superhost: boolean; since: string };
  description: string;
};

const images = [stay1, stay2, stay3, stay4];

const seed: Omit<Listing, "image">[] = [
  {
    id: "loft-lisboa",
    title: "Loft luminoso com vista para o Tejo",
    location: "Alcântara, Lisboa",
    country: "Portugal",
    category: "Lofts",
    pricePerNight: 96,
    rating: 4.92,
    reviews: 214,
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    amenities: ["Wi-Fi", "Cozinha", "Lavandaria", "Ar condicionado"],
    host: { name: "Mariana", superhost: true, since: "2021" },
    description:
      "Um loft industrial reconvertido, com pé-direito alto e janelas de chão ao teto. A dois minutos do mercado e com transportes à porta.",
  },
  {
    id: "cabana-geres",
    title: "Cabana de madeira na floresta",
    location: "Gerês, Braga",
    country: "Portugal",
    category: "Cabanas",
    pricePerNight: 134,
    rating: 4.87,
    reviews: 129,
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 2,
    amenities: ["Lareira", "Estacionamento", "Wi-Fi", "Jardim"],
    host: { name: "Tiago", superhost: true, since: "2019" },
    description:
      "Refúgio de madeira rodeado de pinheiros, com lareira e varanda para o pôr do sol. Ideal para desligar durante uns dias.",
  },
  {
    id: "villa-algarve",
    title: "Villa branca com piscina sobre o mar",
    location: "Lagos, Algarve",
    country: "Portugal",
    category: "Piscinas",
    pricePerNight: 320,
    rating: 4.96,
    reviews: 87,
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 3,
    amenities: ["Piscina", "Vista mar", "Cozinha", "Ar condicionado"],
    host: { name: "Sofia", superhost: false, since: "2022" },
    description:
      "Villa mediterrânica com piscina privada e terraço voltado para o oceano. Praia a 600 metros a pé.",
  },
  {
    id: "estudio-porto",
    title: "Estúdio charmoso no centro histórico",
    location: "Ribeira, Porto",
    country: "Portugal",
    category: "Centros históricos",
    pricePerNight: 72,
    rating: 4.78,
    reviews: 341,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: ["Wi-Fi", "Cozinha", "Varanda"],
    host: { name: "Rui", superhost: true, since: "2018" },
    description:
      "Estúdio acolhedor numa rua de calçada, com varanda de ferro forjado e tudo o que precisas a poucos passos.",
  },
  {
    id: "loft-madrid",
    title: "Apartamento minimalista perto do Retiro",
    location: "Salamanca, Madrid",
    country: "Espanha",
    category: "Lofts",
    pricePerNight: 118,
    rating: 4.81,
    reviews: 156,
    guests: 4,
    bedrooms: 2,
    beds: 3,
    baths: 1,
    amenities: ["Wi-Fi", "Cozinha", "Elevador", "Ar condicionado"],
    host: { name: "Elena", superhost: false, since: "2023" },
    description:
      "Espaço claro e tranquilo a cinco minutos do parque, com cozinha equipada e secretária para trabalhar.",
  },
  {
    id: "cabana-alentejo",
    title: "Casa rural entre oliveiras",
    location: "Évora, Alentejo",
    country: "Portugal",
    category: "Casas rurais",
    pricePerNight: 88,
    rating: 4.9,
    reviews: 64,
    guests: 5,
    bedrooms: 2,
    beds: 3,
    baths: 2,
    amenities: ["Jardim", "Estacionamento", "Lareira", "Cozinha"],
    host: { name: "Ana", superhost: true, since: "2020" },
    description:
      "Casa de campo restaurada, com pátio à sombra e céu estrelado à noite. Pequeno-almoço regional incluído.",
  },
  {
    id: "villa-mykonos",
    title: "Villa com infinity pool sobre a baía",
    location: "Mykonos",
    country: "Grécia",
    category: "Piscinas",
    pricePerNight: 410,
    rating: 4.99,
    reviews: 42,
    guests: 10,
    bedrooms: 5,
    beds: 6,
    baths: 4,
    amenities: ["Piscina", "Vista mar", "Ar condicionado", "Estacionamento"],
    host: { name: "Nikos", superhost: true, since: "2017" },
    description:
      "Arquitetura cicládica com piscina de borda infinita e vistas desafogadas sobre o Egeu.",
  },
  {
    id: "estudio-sevilha",
    title: "Casa de azulejos no bairro antigo",
    location: "Santa Cruz, Sevilha",
    country: "Espanha",
    category: "Centros históricos",
    pricePerNight: 65,
    rating: 4.74,
    reviews: 203,
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    amenities: ["Wi-Fi", "Varanda", "Cozinha"],
    host: { name: "Carmen", superhost: false, since: "2024" },
    description:
      "Um pedaço de Sevilha autêntica, com azulejos originais e varanda sobre uma rua cheia de vida.",
  },
];

export const listings: Listing[] = seed.map((l, i) => ({
  ...l,
  image: images[i % images.length]!,
}));

export const categories = [
  "Todos",
  "Lofts",
  "Cabanas",
  "Piscinas",
  "Centros históricos",
  "Casas rurais",
];

export const getListing = (id: string) => listings.find((l) => l.id === id);
