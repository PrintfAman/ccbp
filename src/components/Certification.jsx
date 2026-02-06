import parse from 'html-react-parser';
import html from '../sections/certification.html?raw';

export default function Certification() {
  return <>{parse(html)}</>;
}
