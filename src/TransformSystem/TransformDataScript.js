import * as Check from './CheckInput.js';
import * as Elements from '../Classes/Elements.js';

export function TransformDatas() {
    let Result = Check.GetType(
    Elements.Column1,
    Elements.Column2,
    Elements.EnterInput
    );

    Elements.ResultInput.value = Result;
}