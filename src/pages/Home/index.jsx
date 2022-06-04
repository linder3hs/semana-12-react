import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSendData = (event) => {
    //para que laweb no se revargue debemos usar preventDefault()
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container>
      <form action="" method="post" onSubmit={handleSendData}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Home modo desarrollo</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su correo"
              name="email"
              fullWidth
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su nombre"
              name="name"
              fullWidth
              value={values.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">
              Home button
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Home;
