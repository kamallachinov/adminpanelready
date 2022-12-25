import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Button from "@mui/material/Button";
import axios from "axios";
function Indeex() {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      companyName: company,
      contactName: contact,
      address: {
        country: country,
      },
    };
    if (company == "" && contact == "" && country == "") {
      alert("Fill the inputs,then submit please...");
    } else {
      axios
        .post("https://northwind.vercel.app/api/suppliers", obj)
        .then((res) => console.log(res));
      setCompany("");
      setContact("");
      setCountry("");
      setTimeout(() => alert("Data added succesfully!"), 1000);
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
          <FormGroup>
            <Label for="exampleEmail">Company Name</Label>
            <Input
              type="text"
              placeholder="Write Company Name "
              style={{ marginTop: "1rem" }}
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
            <Label for="exampleEmail" style={{ marginTop: "1rem" }}>
              Contact Name
            </Label>
            <Input
              type="text"
              placeholder="Write Contact Name "
              style={{ marginTop: "1rem" }}
              onChange={(e) => setContact(e.target.value)}
              value={contact}
            />
            <Label for="exampleEmail" style={{ marginTop: "1rem" }}>
              Address, Country
            </Label>
            <Input
              type="text"
              placeholder="Write Address Name "
              style={{ marginTop: "1rem" }}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <Button
              variant="outlined"
              style={{ marginTop: "2rem" }}
              onClick={handleSubmit}
            >
              Add new item
            </Button>
            <Link to={"/table"} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                style={{ marginTop: "2rem", marginLeft: "1rem" }}
              >
                Go to table
              </Button>
            </Link>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}

export default Indeex;
