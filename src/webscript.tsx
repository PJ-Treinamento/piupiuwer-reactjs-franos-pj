import React, { useEffect, useState } from "react";
import api from "./config/api";

export async function getPiuList() {
  const resp = await api.get("/pius");
  const lista_de_pius = resp.data;

  console.log(lista_de_pius);
  return lista_de_pius;
}

export async function logUser(userInfo: object, loginInfo: object) {
  try {
    api.post("/register", userInfo);
    api.post("/sessions/login", loginInfo);
  } catch (err) {
    console.error(err);
  }
}
