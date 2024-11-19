"use client";
import { useState } from "react";
import style from "./CalculatorDisplay.module.css";
import CalculatorDisplay from "./CalculatorDisplay";

export default function CalculatorDisplay({}) {
const [currentInput, setCurrentInput] = useState("");
const [result, setResult] = useState("");

return (
<div className={style.container}>
<h2 className="text-xl font-bold">Current Input: {currentInput}</h2>
<h3 className="text-lg font-medium">Result: {result}</h3>
</div>
);
}