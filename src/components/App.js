import React, { useState } from "react";

export default function App() {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              required
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => removeField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addField}>Add More..</button>
        <button type="submit">Submit</button>
      </form>
      <p>After clicking submit check console for data</p>
    </div>
  );
}
