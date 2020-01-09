import './styles/index.sass';
import Header from './components/Header';
import { changePage } from './components/pages';

document.body.prepend(Header());
changePage(0);
