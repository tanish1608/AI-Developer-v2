"use client";
import { useState } from "react";
import { OperatorProps } from "@/types/OperatorButtonType";
import style from "./OperatorButton.module.css";

export default function OperatorButton({ callback, operator }: OperatorProps) {
const [expression, setExpression] = useState("");

return (
<button onClick={() => callback(operator)} className={style.button}>
{operator}
</button>
);
}