"use client";
import { useState } from "react";
import style from "./DigitButton.module.css";
import DigitButton from "./DigitButton";

export default function DigitButton({ callback, digit }: Props) {
const [input, setInput] = useState("");

return (
<button onClick={() => callback(digit)} className={style.button}>
{digit}
</button>
);
}