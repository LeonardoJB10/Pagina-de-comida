import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box, Grid } from "@mui/material";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=945c6e195ba6424ea4ebf914af2ca1b5`
        );
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error("Error al obtener detalles del juego:", error);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (!game) return <Typography color="white">Loading...</Typography>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to right, #1a1a2e, #16213e, #0f3460)",
        padding: 4,
      }}
    >
      <Card
        sx={{
          width: "100%",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="100%"
              image={game.background_image || "/images/default-game.jpg"}
              alt={game.name}
              sx={{ objectFit: "cover", borderRadius: "10px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h4" sx={{ color: "#5C7285", fontWeight: "normal", ml: 1 }}>
                {game.name}
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                {game.description_raw || "Descripción no disponible."}
              </Typography>
              
              {/* Información destacada */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" sx={{ color: "#f0a500", fontWeight: "bold" }}>
                  Año de lanzamiento:
                  <Typography component="span" sx={{ color: "#00a8ff", fontWeight: "normal", ml: 1 }}>
                    {game.released || "No disponible"}
                  </Typography>
                </Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography variant="body1" sx={{ color: "#f0a500", fontWeight: "bold" }}>
                  Plataformas:
                  <Typography component="span" sx={{ color: "#00a8ff", fontWeight: "normal", ml: 1 }}>
                    {game.platforms?.map(p => p.platform.name).join(", ") || "No disponible"}
                  </Typography>
                </Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography variant="body1" sx={{ color: "#f0a500", fontWeight: "bold" }}>
                  Género:
                  <Typography component="span" sx={{ color: "#00a8ff", fontWeight: "normal", ml: 1 }}>
                    {game.genres?.map(g => g.name).join(", ") || "No disponible"}
                  </Typography>
                </Typography>
              </Box>

            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default GameDetail;




