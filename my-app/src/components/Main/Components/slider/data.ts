export interface IPeople {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const people = [
  {
    id: 1,
    image: 'https://world-psychology.ru/wp-content/uploads/2016/05/o-rabote-2.jpg',
    name: 'Maria Ferguson',
    title: 'office manager',
    quote: 'Start editing to see some magic happen!',
  },
  {
    id: 2,
    image: './img/welded-pictures/w124.jpg',
    name: 'John Doe',
    title: 'regular girl',
    quote: 'Start editing to see some magic happen!',
  },
  {
    id: 3,
    image: 'https://kto-chto-gde.ru/wp-content/uploads/2017/07/37257801_l.jpg',
    name: 'Peter Smith',
    title: 'product designer',
    quote: 'Start editing to see some magic happen!',
  },
  {
    id: 4,
    image: 'https://i.baraholka.com.ru/files/3/6/3630018.jpg',
    name: 'Jim Dyson',
    title: 'developer',
    quote: 'Start editing to see some magic happen!',
  },
];

export default people;
