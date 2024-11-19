"use client";
import { useState, useEffect } from "react";
import { ClearProps } from "@/types/WeatherForecastType";
import style from "./ClearButton.module.css";

export default function ClearButton({ expression }: ClearProps) {
const [display, setDisplay] = useState("");
const [expressionState, setExpressionState] = useState(expression);

useEffect(() => {
setDisplay(expression);
setExpressionState(expression);
}, [expression]);

return (
<button onClick={() => {
setDisplay("");
setExpressionState("");
}} className={style.button}>
C
</button>
);
}