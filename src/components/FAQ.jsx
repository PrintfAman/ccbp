import parse from 'html-react-parser';
import html from '../sections/faq.html?raw';

export default function FAQ() {
  return <>{parse(html)}</>;
}
