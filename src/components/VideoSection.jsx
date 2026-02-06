import parse from 'html-react-parser';
import html from '../sections/video.html?raw';

export default function VideoSection() {
  return <>{parse(html)}</>;
}
