import { FlexBox1, Name, Company, Info } from "../styled-components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3001/client/1").then((res) => {
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
    </FlexBox1>
  );
}
