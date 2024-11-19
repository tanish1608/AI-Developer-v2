"use client";
import { useState } from "react";
import style from "./DigitButton.module.css";
import DigitButton from "./DigitButton";

export default function DigitButton({ callback }: Props) {
const [input, setInput] = useState("");

return (
<button onClick={() => callback(input)} className={style.button}>
{input}
</button>
);
}