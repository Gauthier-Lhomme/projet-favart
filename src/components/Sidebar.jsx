import {
  FlexBox1,
  Name,
  Company,
  Info,
  Button,
} from "../styled-components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idClient } = useSelector((state) => state.idClientReducer);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/client/${idClient}`).then((res) => {
      setClients(res.data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <FlexBox1>
      <Info>
        <Name>{clients.username}</Name>
        <Company>{clients.job}</Company>
      </Info>
      <Button>Déconnexion</Button>
    </FlexBox1>
  );
}
