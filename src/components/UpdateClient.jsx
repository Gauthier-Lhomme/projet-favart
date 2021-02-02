import { useState, useEffect } from "react";
import axios from "axios";

export default function useForm() {
  const [clients, setClients] = useState([]);
  const [values, setValues] = useState({
    username: "",
    surname: "",
    phone: "",
    password: "",
    password2: "",
    job: "",
    structure_name: "",
    structure_type: "",
    structure_field: "",
    job_field: "",
    territory: "",
    wishes: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delete values.password2;
    axios.patch(`http://localhost:3001/client/9`, values).then((res) => {
      setValues(res.data);
    });
  };

  return { handleChange, values, handleSubmit };
}
