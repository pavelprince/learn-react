import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["a", "b", "c", "d"];
  const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: "a",
      age: 15,
      skill: "react",
    },
    {
      id: 2,
      name: "b",
      age: 20,
      skill: "vue",
    },
    {
      id: 3,
      name: "c",
      age: 25,
      skill: "laravel",
    },
  ];

  const personList = persons.map((person, index) => (
    <Person key={index} person={person}></Person>
  ));

  return (
    <div>
      {personList}

      {/* option 3 use const
      {nameList} */}

      {/* option 2 using map function inside main function
      {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {/* option 1 print using array index
      <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1>
      <h1>{names[3]}</h1> */}
    </div>
  );
}

export default NameList;
