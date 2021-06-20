import List from './components/List'
import React from 'react'
import Context from './Context'
import AddValue from './components/AddValue'
const styles = {
  app: {
    textAlign: 'center',
    
  }
}
function App() {
  const [contacts, setContacts] = React.useState ([
    {id: 1, title: 'Ivan', email: 'Ivan@email'},
    {id: 2, title: 'Marina', email: 'Marina@email'}
  ])

function addContact(value){
  setContacts(contacts.concat(
    [{
      id:Date.now(),
      title: value,

}]
  ))
}
  return (
    <Context.Provider>
    <div style={styles.app}>
       <AddValue onCreate={addContact}/>
      <List value = {contacts} key = {contacts.id}/>
     </div>
     </Context.Provider>
  );
}

export default App;
