import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import Button from "@mui/material/Button";
import axios from "axios";
function Index() {
  const { supId } = useParams();
  const [supplier, setSupplier] = useState([]);
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/suppliers/${supId}`)
      .then((res) => {
        setCompany(res.data?.companyName ?? "");
        setContact(res.data?.contactName ?? "");
        setCountry(res.data?.address?.country ?? "");
        setSupplier(res.data);
      });
  }, []);
  const obj = {
    companyName: company,
    contactName: contact,
    address: {
      country: country,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (company == "" && contact == "" && country == "") {
      alert("Fill the inputs!");
    } else {
      axios
        .put(`https://northwind.vercel.app/api/suppliers/${supId}`, obj)
        .then((res) => console.log(res));
      setCompany("");
      setContact("");
      setCountry("");
      setTimeout(
        () => alert("Data updated succesfully!"),
        navigate(`/table`),
        1000
      );
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Form
          style={{ width: "50%", flexDirection: "column", textAlign: "center" }}
        >
          <Label for="exampleEmail">Company Name</Label>
          <Input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={{ marginTop: "1rem" }}
          ></Input>
          <Label for="exampleEmail" style={{ marginTop: "1rem" }}>
            Contact Name
          </Label>
          <Input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{ marginTop: "1rem" }}
          ></Input>
          <Label for="exampleEmail" style={{ marginTop: "1rem" }}>
            Address, Country
          </Label>
          <Input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ marginTop: "1rem" }}
          ></Input>
          <div>
            <Button
              variant="outlined"
              style={{ marginTop: "2rem", marginLeft: "1rem" }}
              onClick={handleSubmit}
            >
              Update
            </Button>
            <Link to={"/table"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{ marginTop: "2rem", marginLeft: "1.5rem" }}
              >
                Go Table
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Index;
