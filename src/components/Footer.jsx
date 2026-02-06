import parse from 'html-react-parser';
import html from '../sections/footer.html?raw';

export default function Footer() {
  return <>{parse(html)}</>;
}
