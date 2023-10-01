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
    image: './img/slider/svarka-fon-krasivie-7.jpg',
    name: 'Maria Ferguson',
    title: 'office manager',
    quote: 'Start editing to see some magic happen!',
  },
  {
    id: 2,
    image: './img/slider/sv3.jpg',
    name: 'John Doe',
    title: 'regular girl',
    quote: 'Start editing to see some magic happen!',
  },
  {
    id: 3,
    image: './img/slider/weld-place.jpg',
    name: 'Peter Smith',
    title: 'product designer',
    quote: 'Start editing to see some magic happen!',
  },
];

export default people;
