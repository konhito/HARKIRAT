import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const [data, setData] = useState([
    {
      name: "Hello world",
    },
  ]);

  function pushInArray(e) {
    let obj = { name: e };
    setData((prevData) => [...prevData, obj]); //insertions
  }

  function inputNameChange(e) {
    setName(e.target.value);
  }

  function changeName() {
    pushInArray(name);
  }

  function deleteName(indexToDelete) {
    setData(
      (prevData) => prevData.filter((_, index) => index !== indexToDelete) //deletion
    );
  }

  function displayNames() {
    return data.map((item, index) => (
      <div key={index}>
        {item.name}{" "}
        <input type="checkbox" onChange={() => deleteName(index)}></input>{" "}
      </div>
    ));
  }

  return (
    <div>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={inputNameChange}
      />

      <button onClick={changeName}>Submit</button>
      <h2>Submitted Names:</h2>
      {displayNames()}
    </div>
  );
};

export default Form;
