import { useState } from "react";

function PhoneTable({ contacts }) {
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filterContacs = () => {
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(filter) ||
        c.lastName.toLowerCase().includes(filter) ||
        c.number.toLowerCase().includes(filter),
    );
  };

  return (
    <>
      <ContactForm />
      <table>
        <caption>Contactos</caption>
        <input type="text" placeholder="search" onChange={handleFilter} />
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Numero</th>
          </tr>
        </thead>
        <tbody>
          {filterContacs().map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.lastName}</td>
              <td>{contact.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PhoneTable;
