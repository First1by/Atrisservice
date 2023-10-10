import SheduleSlide from './shedule-component';
import './slides.css';
import './shedule.css';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

export default function SlidesContainer(props: { id: number }) {
  let content;
  if (props.id == 1) content = <FirstSlide />;
  if (props.id == 2) content = <SecondSlide />;
  if (props.id == 3) content = <ThirdSlide />;
  return <>{content}</>;
}
