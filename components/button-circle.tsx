import s from '/styles/button-circle.module.scss';

let   className=''
const getStyledButton = theme => {
  switch (theme) {
    case 'close':
      className = s.close
      return 
    case 'white':
      className = s.white
      
    default:
      return {};
  }
};

const ButtonCircle = ({ theme, onClick, type }) => {

  getStyledButton(theme)

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
    </button>
  );
};

export default ButtonCircle;