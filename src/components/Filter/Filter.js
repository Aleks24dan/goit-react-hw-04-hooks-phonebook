import PropTypes from 'prop-types';
import { Input, LabelInput } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChange, onBlur }) => (
  <label>
    <LabelInput>Find contact by name
      <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
    </LabelInput>
    
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
