import PropTypes from 'prop-types';
import { Label } from './ContactFilter.styled';

const ContactFilter = ({ onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input onChange={onChange} />
    </Label>
  );
};

export default ContactFilter;
ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
