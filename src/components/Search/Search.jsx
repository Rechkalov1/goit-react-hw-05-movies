import { toast } from 'react-toastify';
import { Header, Form, Input, Button } from './Search.styled';

import { useState } from 'react';

export default function Search({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleNameChange = e => {
    const { value } = e.target;
    setSearchQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.warn('Enter a valid name');
      setSearchQuery('');
    }
    onSubmit(searchQuery);
    resetForm();
  };
  const resetForm = () => {
    setSearchQuery('');
  };
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleNameChange}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
          value={searchQuery}
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </Form>
    </Header>
  );
}
