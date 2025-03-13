import React from "react";
import {
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Link,
  Box,
  Divider,
} from "@mui/material";
import { Email, GitHub } from "@mui/icons-material";
import "./PageAbout.css";

const skillsData = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    url: "https://www.java.com/en/",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    url: "https://vuejs.org/",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://www.python.org/",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
    url: "https://angular.io/",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://reactjs.org/",
  },
  {
    name: "Ionic",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    url: "https://ionicframework.com/",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/",
  },
];

export default function PageAbout() {
  return (
    <Box className="background">
      <Container maxWidth="md" className="portfolio-container">
        {/* Sección de perfil */}
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4} className="profile-container">
            <Avatar
              src="https://avatars.githubusercontent.com/u/181114153?v=4"
              alt="César Sánchez"
              sx={{ width: 150, height: 150, boxShadow: 5, border: "4px solid #63f2ff" }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" className="title">
            Soy Jorge Bustos, Mucho gusto
            </Typography>
            <Typography className="description">
              Apasionado por el desarrollo web, la programación, redes y el aprendizaje continuo de nuevas tecnologías.
              Estudiante de la Universidad Tecnológica Riviera Maya en Playa del Carmen, Quintana Roo. Tengo 19 años y
              cuento con un técnico en soporte y mantenimiento de equipos de cómputo.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Sección de educación y experiencia */}
        <Typography variant="h5" className="skills-title" gutterBottom>
          Educación
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Sección de Educación */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" className="description">
              <strong>Carrera Tecnica:</strong> Técnico en soporte y mantenimiento de equipos de cómputo.
            </Typography>
            <Typography variant="body1" className="description">
              <strong>Estudios:</strong> Preparatoria CECYTE Playa del Carmen, Plantel 1.
            </Typography>
          </Grid>

          {/* Sección de Experiencia */}
          <Grid item xs={12} md={6}>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección de contacto */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
              
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
