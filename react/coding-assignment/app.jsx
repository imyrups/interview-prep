import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [formData, setFormData] = useState({
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <form onSubmit={e => { e.preventDefault(); addEntryToPhoneBook(formData) }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={formData.userFirstname}
        onChange={handleChange}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={formData.userLastname}
        onChange={handleChange}

      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={formData.userPhone}
        onChange={handleChange}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {
  const {users} = props;
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        { users && users.length > 0 &&
          users.map(user => <tr key={`${user.userFirstname}${user.userLastname}`}>
            <td>{user.userFirstname}</td>
            <td>{user.userLastname}</td>
            <td>{user.userPhone}</td>
          </tr>
          )
        }
      </tbody>
    </table>
  );
}

function Application(props) {
  const [users, setUsers] = useState([]);

  const addUser = useCallback((user) => {
    let newUsers = [user, ...users];
    newUsers = newUsers.sort((a,b) => {
      if (a.userLastname < b.userLastname) {
        return -1;
      } else if (a.userLastname > b.userLastname) {
        return 1;
      } else {
        return 0;
      }
    })
    setUsers(newUsers);
  }, [users])

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addUser} />
      <InformationTable users={users}/>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
