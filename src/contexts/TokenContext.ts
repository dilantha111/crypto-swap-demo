import React from "react";
import { Coin } from "../types/coin.type";

export const TokenContext = React.createContext<Coin[]>([]);
