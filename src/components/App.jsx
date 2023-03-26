import { Component } from 'react';
// import shortid from 'shortid';

import ContactList from './Filter/ContactList/ContactList';
import { Form } from './Form/Form';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterVisible = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  formSubmitHandle = data => {
    this.setState(prevState =>
      prevState.contacts.find(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
        ? alert(`${data.name} is alredy in contacts`)
        : prevState.contacts.push(data)
    );
  };

  deleteContact = e => {
  console.log(e.target.parentElement);
}

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSUbmit={this.formSubmitHandle} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.changeFilter} />
        <ContactList
          filterVisible={this.filterVisible()} d
          eleteContact={this.deleteContact} />
      </>
    );
  }
}
