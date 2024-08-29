import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: '100vh',
        width: "100%",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
              <Button variant="contained">Back Home</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="Error Illustration"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}