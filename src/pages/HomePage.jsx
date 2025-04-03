import React, { useState, useEffect } from "react";
import { Paper, InputBase, IconButton, Card, Select, MenuItem, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ContenidoJuegos from "./ContenidoJuegos";

export default function HomePage() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [data, setData] = useState({ results: [] });
  const [plataforma, setPlataforma] = useState("4"); // 4 = PC
  const [genero, setGenero] = useState("action");

  console.log("Buscando:", textoBuscar);

  const obtenerJuegosPorFiltro = async () => {
    const requestOptions = { method: "GET", redirect: "follow" };

    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=945c6e195ba6424ea4ebf914af2ca1b5&platforms=${plataforma}&genres=${genero}&search=${textoBuscar}`,
        requestOptions
      );
      const result = await response.json();
      setData(result);
      console.log("Resultados de la API:", result);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    obtenerJuegosPorFiltro();
  }, [plataforma, genero]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      obtenerJuegosPorFiltro();
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "black" }}>
        Encuentra tu próximo juego 🎮🔥
      </h1>

      <Grid container justifyContent="center" spacing={2} padding={2}>
        <Grid item xs={12} md={8} lg={6}>
          <Card sx={{ padding: 2, borderRadius: "20px", boxShadow: "none" }}>
            <Paper component="form" sx={{ display: "flex", alignItems: "center", padding: "10px 20px", borderRadius: "30px", boxShadow: 3 }}>
              <InputBase
                sx={{ ml: 2, flex: 1, fontSize: "18px" }}
                placeholder="Buscar juego..."
                value={textoBuscar}
                onChange={(e) => setTextoBuscar(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <IconButton onClick={obtenerJuegosPorFiltro} sx={{ p: "12px" }} color="primary">
                <SearchIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Paper>
          </Card>
        </Grid>

        {/* Select de Plataforma */}
        <Grid item>
          <Typography>Plataforma:</Typography>
          <Select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
            <MenuItem value="4">PC</MenuItem>
            <MenuItem value="18">PlayStation</MenuItem>
            <MenuItem value="1">Xbox</MenuItem>
            <MenuItem value="7">Nintendo Switch</MenuItem>
          </Select>
        </Grid>

        {/* Select de Género */}
        <Grid item>
          <Typography>Género:</Typography>
          <Select value={genero} onChange={(e) => setGenero(e.target.value)}>
            <MenuItem value="action">Acción</MenuItem>
            <MenuItem value="shooter">Shooter</MenuItem>
            <MenuItem value="rpg">RPG</MenuItem>
            <MenuItem value="adventure">Aventura</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <ContenidoJuegos data={data.results} />
    </div>
  );
}

