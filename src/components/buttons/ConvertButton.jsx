import PropTypes from 'prop-types'

const ConvertButton = ({ onClick, text }) => {
  return (
    <button
      className="w-1/2 rounded-md border-2 border-transparent py-1.5 px-6 text-black bg-[#ffe8ab] focus:outline-none transition-colors duration-700 ease-in-out focus-visible:border-2 hover:border-[#fcd260]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

ConvertButton.propTypes = {
  onClick: PropTypes.func.isRequired, 
  text: PropTypes.string.isRequired
};


export default ConvertButton;