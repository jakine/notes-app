import React from "react";
import Layout from '../components/Layout'
import Form from "../components/Form";
import { useDispatch } from 'react-redux'
import { contactsListActions } from '../store/contactsSlice'
const AddContact = () => {


  return (
    <Layout>
      <Form />
    </Layout>
  );
};

export default AddContact;
