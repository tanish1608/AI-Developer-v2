import style from './Page.module.css';
import { CalculatorDisplay } from '../CalculatorDisplay';
import { DigitButton } from '../DigitButton';
import { OperatorButton } from '../OperatorButton';
import { ClearButton } from '../ClearButton';
import { EqualsButton } from '../EqualsButton';

export default function Page() {
return (
<div className="container mx-auto p-4">
<CalculatorDisplay />
<div className={style.buttonContainer}>
<DigitButton digit="7" />
<DigitButton digit="8" />
<DigitButton digit="9" />
<OperatorButton operator="/" />
<DigitButton digit="4" />
<DigitButton digit="5" />
<DigitButton digit="6" />
<OperatorButton operator="" />
<DigitButton digit="1" />
<DigitButton digit="2" />
<DigitButton digit="3" />
<OperatorButton operator="-" />
<DigitButton digit="0" />
<EqualsButton />
</div>
</div>
);
}