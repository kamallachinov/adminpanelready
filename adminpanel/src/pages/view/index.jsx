import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input, Form, Button } from "reactstrap";
function Index() {
  const [datas, setDatas] = useState([]);
  let { supId } = useParams();

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/suppliers/${supId}`)
      .then((res) => setDatas(res.data));
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Form
          style={{ width: "40%", flexDirection: "column", textAlign: "center" }}
        >
          <h2 style={{ marginTop: "1rem" }}>Item id:{datas.id}</h2>
          <Input
            style={{ marginTop: "1.5rem" }}
            className="mb-3"
            placeholder="Company name"
            value={datas.companyName}
          />
          <Input
            style={{ marginTop: "1.5rem" }}
            className="mb-3"
            placeholder="Contact name"
            value={datas.contactName}
          />
          <Input
            style={{ marginTop: "1.5rem" }}
            className="mb-3"
            placeholder="Address,country"
            value={datas.address?.country}
          />
          <Link to={"/table"}>
            <Button variant="text">Go Table</Button>
          </Link>
        </Form>
      </div>
    </>
  );
}
export default Index;
