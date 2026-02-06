import parse from 'html-react-parser';
import html from '../sections/hero.html?raw';

export default function Hero() {
  return <>{parse(html)}</>;
}
