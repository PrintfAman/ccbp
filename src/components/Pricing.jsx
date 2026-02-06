import parse from 'html-react-parser';
import html from '../sections/pricing.html?raw';

export default function Pricing() {
  return <>{parse(html)}</>;
}
