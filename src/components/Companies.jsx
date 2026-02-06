import parse from 'html-react-parser';
import html from '../sections/companies.html?raw';

export default function Companies() {
  return <>{parse(html)}</>;
}
