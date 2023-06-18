import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineSearch } from 'react-icons/hi';
import { Header, Form, Input, SearchBtn } from './Searchbar.styled';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return toast('☀︎ Write the subject of the picture ☾');
    }

    onSubmit(query);
    setQuery('');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <Header>
      <Form className="form" onSubmit={handleSubmit}>
        <Input
          className="input"
          name="search"
          type="text"
          onChange={handleInput}
          onKeyDown={handleKeyPress}
          value={query}
          required
          placeholder="Search images and photos..."
        />
        <SearchBtn type="submit" className="button">
          <HiOutlineSearch size={28} />
        </SearchBtn>
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;