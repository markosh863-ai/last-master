import { createPortal } from 'react-dom';

const Protal = ({ children }) => {
  // Телепортируем контент в body или отдельный контейнер
  return createPortal(children, document.body);
};

export default Protal;