import React, { useState, useEffect } from "react";
import PersonService from "../services/personService";

export default function Person() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    let personService = new PersonService();
    personService.getPersons().then((result) => setPersons(result.data.data));
  },[]);

  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr>
              <th scope="row">{person.id}</th>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
