import Button from "../components/Button";
import { Link, Navigate } from "react-router-dom";
import styles from './MyTable.module.css'
import { useSelector } from "react-redux";

function MyTable(props) {
  const test = useSelector(state => state.contacts.allContacts)
  console.log(test)



  return (
    <table className={styles.customers}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
          <th>Email</th>
          <th>number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {test.length && test.map((c)=>(
          
        <tr key={c.id}>

          <td>{c.name}</td>
          <td>{c.lastName}</td>
          <td>{c.address}</td>
          <td>{c.city}</td>
          <td>{c.country}</td>
          <td>{c.email}</td>
          <td>{c.number}</td>
          <td>
              <Button onPress={props.onEdit}  text="edit" />
          </td>
          <td>
            <Button onPress={()=>props.onDelete(c)} text="Delete" />
          </td>
        </tr>
        ))}
        
      </tbody>
    </table>
  );
}

export default MyTable;
