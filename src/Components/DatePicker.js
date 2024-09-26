import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isBetween from "dayjs/plugin/isBetween";
import { faAngleDown, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Cargar los plugins de dayjs
dayjs.extend(weekOfYear);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);

// Crear el tema con los estilos personalizados
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: "40px",
          appearance: "none",
          cursor: "pointer",
          backgroundColor: "white",
          border: "1px solid #495E57",
          fontFamily: "Nunito",
          borderRadius: "5px",
          display: "block",
          fontSize: "15px",
          fontWeight: "500",
          height: "56px",
          lineHeight: "34px",
          padding: "10px 20px",
          position: "relative",
          transition: "all 0.3s ease",
          width: "100%",
          margin: "0",
          outline: "none",
          boxSizing: "border-box",
          overflow: "visible",
          color: "#757575",
          textAlign: "left",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

const ReservationDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [open, setOpen] = useState(false);

  // Obtener la fecha actual y la fecha de una semana después
  const today = dayjs();
  const oneWeekLater = dayjs().add(7, "day");

  // Formatear la fecha en formato "día mes año"
  const formattedDate = selectedDate.format("MMM / DD / YYYY");

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <Button onClick={() => setOpen(true)}>
            <FontAwesomeIcon
              icon={faCalendar}
              style={{
                color: "black",
                lineHeight: "30px",
                marginTop: "-8px",
                pointerEvents: "none",
                position: "absolute",
                top: "50%",
                zIndex: "1",
                left: "15px",
                display: "inline-block",
                height: "14px",
              }}
            />
            <div
              style={{
                marginLeft: "1.4rem",
              }}
            >
              {formattedDate}
            </div>
            {/* Mostrar la fecha actual o la seleccionada */}
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{
                color: "black",
                lineHeight: "30px",
                marginTop: "-8px",
                pointerEvents: "none",
                position: "absolute",
                top: "50%",
                zIndex: "1",
                right: "15px",
                display: "inline-block",
                height: "14px",
              }}
            />
          </Button>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="sm"
            fullWidth
            aria-labelledby="date-picker-dialog"
          >
            <DialogContent>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                onChange={(newDate) => {
                  setSelectedDate(newDate);
                  setOpen(false); // Cierra el diálogo después de seleccionar la fecha
                }}
                minDate={today}
                maxDate={oneWeekLater}
                value={selectedDate}
                renderInput={() => null} // No renderiza el input
              />
            </DialogContent>
          </Dialog>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default ReservationDatePicker;
