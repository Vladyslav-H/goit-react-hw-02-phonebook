
const ContactList = ({filterVisible,deleteContact}) => {
 
    return (
        <ul>
  {filterVisible.map(({ name, number }) => (
    <li key={name}>
          {name}: {number}
          <button type='button' onClick={deleteContact}>Delete</button>
    </li>
  ))}
</ul>
    )
}
export default ContactList;
