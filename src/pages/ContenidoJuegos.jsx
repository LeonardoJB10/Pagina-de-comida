import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContenidoJuegos({ data }) {
  return (

    <Grid container spacing={2} padding={4} justifyContent="center">
      {data && data.length > 0 ? (
        data.map((juego) => {
          console.log("URL de la imagen:", juego.background_image); // Verifica la URL aquí
          return (
            <Grid item key={juego.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 300, borderRadius: "20px", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"

                  image={juego.background_image}
                  alt={juego.name}
                  sx={{ borderRadius: "20px 20px 0 0" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {juego.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plataforma: {juego.platforms?.map((p) => p.platform.name).join(", ")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Género: {juego.genres?.map((g) => g.name).join(", ")}
                  </Typography>
                  <Link to={`/game/${juego.id}`} style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        marginTop: 2,
                        borderRadius: "15px",
                        backgroundColor: "#1a1a2e", // Azul Oscuro Neón
                        color: "#ffffff", // Texto Blanco para contraste
                        "&:hover": {
                          backgroundColor: "#0f3460", // Azul Profundo en Hover
                        },
                      }}
                    >
                      MÁS INFORMACIÓN
                    </Button>

                  </Link>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      ) : (
        <Typography variant="h6" textAlign="center">
          No se encontraron juegos
        </Typography>
      )}
    </Grid>
  );
}
