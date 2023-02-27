import MyTable from "../components/MyTable";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import styles from './Stylees.module.css'
import { contactsListActions } from '../store/contactsSlice'


function PhoneBook(props) {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const test = useSelector(state => state.contacts.allContacts)
  console.log(test)

  const deleteEleemnt=(a)=>{
    console.log('wp',a )
    // console.log(c)
    dispatch(
      contactsListActions.deleteContact(a)
    )

  }
  return (
    <Layout>
      <>
        <div className={styles.phonebookLayout}>
          <h2>Contacts {test[0]?.name} {test[0]?.lastName}</h2>
          <Button onPress={() => {
            console.log('clicked')
            navigate("/add-contact")
          }} text="Add Contact" />
        </div>
        {/* <MyTable props={test} onEdit={()=>console.log('onEdit working')} onDelete={()=>{console.log('woking')}}/> */}
        <MyTable props={test} onDelete={deleteEleemnt} />

      </>
    </Layout>
  );
}

export default PhoneBook;
