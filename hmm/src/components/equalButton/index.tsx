"use client";
import { useState, useEffect } from "react";
import { EqualsProps } from "@/types/EqualButtonType";
import style from "./EqualButton.module.css";

export default function EqualButton({ expression }: EqualsProps) {
const [display, setDisplay] = useState("");
const [expressionState, setExpressionState] = useState(expression);

useEffect(() => {
setDisplay(expression);
setExpressionState(expression);
}, [expression]);

const evaluateExpression = () => {
try {
const result = eval(expression);
setDisplay(result.toString());
setExpressionState(result.toString());
} catch (error) {
setDisplay("Error");
setExpressionState("");
}
};

return (
<button onClick={evaluateExpression} className={style.button}>
=
</button>
);
}