import React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import axios from "axios";
import { Container } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";

function Index() {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setDatas(res.data);
    });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
    const deleteItem = datas.filter((x) => x.id !== id);
    setDatas(deleteItem);
  };
  const handleView = (id) => {
    navigate(`/table/view/${id}`);
  };
  const handleUpdate = (id) => {
    navigate(`/table/update/${id}`);
  };
  return (
    <>
      <Container>
        <TableContainer
          style={{ marginTop: "3rem", width: "100%", flexWrap: "wrap" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Company Name</TableCell>
                <TableCell align="center">Contact Name</TableCell>
                <TableCell align="center">Address,country</TableCell>
                <TableCell align="center">Actions</TableCell>
                <TableCell align="center">View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.id}
                  </TableCell>
                  <TableCell align="center">{data.companyName}</TableCell>
                  <TableCell align="center">{data.contactName}</TableCell>
                  <TableCell align="center">{data.address?.country}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      style={{ marginLeft: "1rem" }}
                      onClick={() => handleUpdate(data.id)}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      onClick={() => handleView(data.id)}
                    >
                      View detailed
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Index;
