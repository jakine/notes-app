import React from "react";
import Button from "./Button";
import { useState } from "react";
import { contactsListActions } from '../store/contactsSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css'

const Form = (props) => {

  const test = useSelector(state => state.contacts.allContacts)
  // console.log(test)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const addContact = (evt) => {
    evt.preventDefault(); // this prevents the default event of form which include refreshing the page.
    const currentContact = {
      id: test.length,
      name: evt.target.name.value,
      lastName: evt.target.lastName.value,
      address: evt.target.address.value,
      city: evt.target.lastName.value,
      country: evt.target.country.value,
      email: evt.target.email.value,
      number: evt.target.number.value,
      
    }

    console.log(currentContact, "AAA");
    dispatch(contactsListActions.addContact(currentContact)) // here we save contact on redux
    navigate("/phone-book") // here we navigate to phonebook route
  }


  return (
    <div className={styles.container}>
      <form onSubmit={addContact} className={styles.forma}>
        <h4>register new contact</h4>
        <label>Name</label>
        <input type="text" name="name" id="" />
        <label>Last Name</label>
        <input type="text" name="lastName" id="" />

        <label>Address</label>
        <input type="text" name="address" id="" />

        <label>City</label>
        <input type="text" name="city" id="" />

        <label>Country</label>
        <input type="text" name="country" id="" />

        <label>Email</label>
        <input type="text" name="email" id="" />
        <Button onPress={props.onAddNumber}>add number</Button>
        <label>number</label>
        <input type="text" name="number" id="" />
        <Button onPress={props.onAddEmail}>add email</Button>
        <br />
        <Button type='submit' onPress={props.onSave} >save</Button>
      </form>
    </div>
  );
};

export default Form;
