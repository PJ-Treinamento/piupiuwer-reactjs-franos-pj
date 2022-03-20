import React from "react";

// Funcao para determinar o tempo decorrido desde que o Piu foi postado
function determineTimeElapsed(created_at: any) {
  // Constantes uteis
  const minute_in_ms = 60 * 1000;
  const hour_in_ms = minute_in_ms * 60;
  const day_in_ms = hour_in_ms * 24;
  const year_in_ms = day_in_ms * 365;

  // Tempo transcorrido desde o piu, em milisegundos
  const timeElapsed_ms = Date.now() - new Date(created_at).getTime();

  if (timeElapsed_ms >= year_in_ms) {
    const timeElapsed_years = Math.floor(timeElapsed_ms / year_in_ms);
    const timeElapsed_str = timeElapsed_years.toString() + "y";
    return timeElapsed_str;
  } else if (timeElapsed_ms >= day_in_ms) {
    const timeElapsed_days = Math.floor(timeElapsed_ms / day_in_ms);
    const timeElapsed_str = timeElapsed_days.toString() + "d";
    return timeElapsed_str;
  } else if (timeElapsed_ms >= hour_in_ms) {
    const timeElapsed_hours = Math.floor(timeElapsed_ms / hour_in_ms);
    const timeElapsed_str = timeElapsed_hours.toString() + "h";
    return timeElapsed_str;
  } else {
    const timeElapsed_minutes = Math.floor(timeElapsed_ms / minute_in_ms);
    const timeElapsed_str = timeElapsed_minutes.toString() + "m";
    return timeElapsed_str;
  }

}

export default determineTimeElapsed;
