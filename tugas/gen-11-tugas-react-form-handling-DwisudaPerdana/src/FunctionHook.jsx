import { useState } from "react";
export default function FunctionHook(inputData) {
  const [formInput, setFormInput] = useState(inputData);

  function handleFormInput(evt, propName) {
    setFormInput({ ...formInput, [propName]: evt.target.value });
  }

  return {
    formInput,
    handleFormInput,
  };
}
