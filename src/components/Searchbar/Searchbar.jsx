import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineSearch } from 'react-icons/hi';
import { Header, Form, Input, SearchBtn } from './Searchbar.styled';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return toast('☀︎ Write the subject of the picture ☾');
    }

    onSubmit(query);
    this.setState({ query: '' });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  render() {
    const { query } = this.state;
    return (
      <Header>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Input
            className="input"
            name="search"
            type="text"
            onChange={this.handleInput}
            onKeyDown={this.handleKeyPress}
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
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
