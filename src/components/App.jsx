import { Component } from 'react';
 
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
    this.setState(prevState => {
      const newContact = prevState.contacts.find(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      );

      if (newContact) {
        alert(`${data.name} is alredy in contacts`);
        return;
      } else {
        data.id = `id-${prevState.contacts.length + 1}`;
      }

      return prevState.contacts.push(data);
    });
  };

  deleteContact = e => {
    this.setState(prevState => {
      return (prevState.contacts = prevState.contacts.filter(
        contact => contact.id !== e.target.id
      ));
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmitHandle={this.formSubmitHandle} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          filterVisible={this.filterVisible()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
