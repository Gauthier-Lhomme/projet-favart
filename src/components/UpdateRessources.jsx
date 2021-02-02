import { useState } from "react";
import axios from "axios";

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
    axios.post(`http://localhost:3001/ressources`, values).then((res) => {
      setValues(res.data);
    });
  };

  return { handleChange, values, handleSubmit };
}
