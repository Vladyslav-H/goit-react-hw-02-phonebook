
const ContactList = ({filterVisible,deleteContact}) => {
 
    return (
        <ul>
  {filterVisible.map(({id, name, number }) => (
    <li key={id}>
          {name}: {number}
          <button id={id} type='button' onClick={deleteContact}>Delete</button>
    </li>
  ))}
</ul>
    )
}
export default ContactList;
