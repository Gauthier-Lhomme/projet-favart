import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function useForm(validateInfo) {
  let history = useHistory();

  const [values, setValues] = useState({
    username: "",
    surname: "",
    email: "",
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    delete values.password2;
    axios.post("http://localhost:3001/auth/signup", values).then((res) => {
      setValues(res.data);
      history.push("/clientpage");
    });
  };

  return { handleChange, values, handleSubmit, errors };
}
