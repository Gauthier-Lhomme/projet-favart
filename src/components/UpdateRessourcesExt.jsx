import { useState } from "react";
import { api } from "../conf";

export default function useForm() {
  const [values, setValues] = useState({
    link: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post(`/ressourcesext`, values).then((res) => {
      setValues(res.data);
    });
  };

  return { handleChange, values, handleSubmit };
}
