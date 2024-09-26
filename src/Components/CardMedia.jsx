import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons/faPersonBiking";
import { Container, Grid } from "@mui/material";
import { useCardData } from "../Hooks/useCardData";

export default function MediaCards() {
  const { cards } = useCardData();

  return (
    <Container>
      <Grid container justifyContent="space-between" spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={4} key={card.id}>
            <Card
              sx={{
                width: "100%",
                height: 549,
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo semitransparente
                backdropFilter: "blur(10px)", // Desenfoque de fondo
                borderRadius: "15px", // Bordes redondeados
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Sombra suave
                border: "1px solid rgba(255, 255, 255, 0.3)", // Borde sutil
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{
                  height: 231,
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    paddingTop: 1,
                    fontFamily: "Karla",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontFamily: "Karla",
                    fontSize: "15px",
                    fontWeight: "500",
                    paddingTop: 4,
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.8rem",
                  marginTop: "auto",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    fontFamily: "Karla",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {card.buttonText}
                </Button>
                <FontAwesomeIcon icon={faPersonBiking} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
