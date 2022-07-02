import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { LabelFilter, InputFilter } from './Filter.styled';

const generateId = nanoid();

const Filter = ({ value, onChange }) => {
  return (
    <LabelFilter htmlFor={generateId}>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={onChange} 
        id={generateId}
      />
    </LabelFilter>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};