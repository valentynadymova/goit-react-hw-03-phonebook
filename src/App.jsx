import React, { Component } from 'react';
import { Container,TitlePhoneBook,TitleContacts,Section } from 'GlobalStyle'
import { nanoid } from 'nanoid';
import ContactForm from './components/Form/Form'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


export default class App extends Component {

  state = {

      contacts: [
        // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      name: '',
      number: ''
    
  };

  generateId=nanoid();

  

  componentDidMount(){
    const contacts=localStorage.getItem('contacts');
    const parsedContacts=JSON.parse(contacts);

    if (parsedContacts){
      this.setState({contacts:parsedContacts});
    }
  }

  componentDidUpdate(prevProps,prevState){
    const nextContacts=this.state.contacts;
    const prevContacts=prevState.contacts;

    if(nextContacts!==prevContacts){
      console.log('contacts are updated');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  formSubmitHandler = data => {
    const { name } = data;
    const normalizedNameContact = name.toLowerCase();

    const newId = { id: nanoid(), ...data };

    this.findContactName(normalizedNameContact)
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, newId] };
        });
  };

  findContactName=nameData=>{
    const {contacts}=this.state;
    return contacts.find(({name})=>name.toLowerCase()===nameData);
  };

  deleteContact=contactId=>{
    this.setState(previousState=>({
      contacts: previousState.contacts.filter(({id})=>id!==contactId)
    }));
  };

  changeFilter=e=>{
    this.setState({filter: e.currentTarget.value});
  };

  getFilterContact=()=>{
    const {contacts,filter}=this.state;
    const normalizedFilter=filter.toLowerCase();

    return contacts.filter(({name})=>name.toLowerCase().includes(normalizedFilter));

  }

  render() {
    const {filter}=this.state;
    const visibleContact=this.getFilterContact();

    return(

    
      <Container>
        
      <Section>
      <TitlePhoneBook>PHONEBOOK</TitlePhoneBook>
      <ContactForm formSubmit={this.formSubmitHandler}></ContactForm>
      </Section>

      <Section>
      <TitleContacts>
        contacts
      </TitleContacts>

      <Filter value={filter} onChange={this.changeFilter}></Filter>

      <ContactList
            visibleContact={visibleContact}
            onDelete={this.deleteContact}
          ></ContactList>
      </Section>

      </Container>

    )
 
  };

}
