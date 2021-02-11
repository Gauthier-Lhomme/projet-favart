import { useState } from "react";
import { api } from "../conf";
import { useSelector } from "react-redux";

export default function useForm() {
  const { idClient } = useSelector((state) => state.idClientReducer);
  const { infosClient } = useSelector((state) => state.infosClientReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({
    username: infosClient.username,
    surname: infosClient.surname,
    phone: infosClient.phone,
    job: infosClient.job,
    structure_name: infosClient.structure_name,
    structure_type: infosClient.structure_type,
    structure_field: infosClient.structure_field,
    job_field: infosClient.job_field,
    territory: infosClient.territory,
    wishes: infosClient.wishes,
    website: infosClient.website,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    delete values.password2;
    api.patch(`/client/${idClient}`, values).then((res) => {
      setValues(res.data);
    });
  };

  return { handleChange, values, handleSubmit };
}
