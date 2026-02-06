import parse from 'html-react-parser';
import html from '../sections/navbar.html?raw';

export default function Navbar() {
  return <>{parse(html)}</>;
}
