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
              src="data:image/jpeg;base64,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"
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
              Estudiante de la Universidad Tecnológica Riviera Maya en Playa del Carmen, Quintana Roo. Tengo 20 años y
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
              <strong>Estudios:</strong> Preparatoria Bachilleres
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
