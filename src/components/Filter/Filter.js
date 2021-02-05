import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import * as contactsActions from 'redux/contacts';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import FormContainer from '../FormComponents/FormContainer';
import SearchIcon from '@material-ui/icons/Search';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <InputBase
        startAdornment={<SearchIcon fontSize="small" color="secondary" />}
        placeholder="search your contacts"
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </FormContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
