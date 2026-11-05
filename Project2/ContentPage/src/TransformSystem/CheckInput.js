export function AreContentHere(Input) {
    if (Input.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

export function ChechText(Input) {
    let Text = Input.value;
    let AreTrue = true;

    for (let i = 0; i < Text.length; i++) {
        if (Text[i] != '1' && Text[i] != '2' && Text[i] != '3'
             && Text[i] != '4' && Text[i] != '5' && Text[i] != '6'
              && Text[i] != '7' && Text[i] != '8' && Text[i] != '9'
               && Text[i] != '0')
        {
            AreTrue = false;
            break;
        }
    }

    if (AreTrue) {
        Text = parseInt(Text);
    }

    return { AreTrue, Text };
}

export function GetType(Column1, Column2, Input) {
    let Select = Number(Column1.getAttribute("BoxSelected")); // Type Bite - PB
    let Transform = Number(Column2.getAttribute("BoxSelected")); // Type Bite - PB
    let Text; // input

    let ChechTextFunction = ChechText(Input)
    if (!AreContentHere(Input) || !ChechTextFunction.AreTrue) {
        return false;
    } else {
        Text = ChechTextFunction.Text;
    }

    let Bytes = 1024;
    
    if (Select && Transform) {
        if ((Transform == 1 || Transform == 2 ) && Select < Transform) {
            let Multiplication = Math.pow(Bytes, Math.abs(Select - Transform) - 1);
            return (Text * Multiplication / 8);
        } else if (Transform == 1 && Select > Transform) {
            let Multiplication = Math.pow(Bytes, Math.abs(Select - Transform) - 1);
            return (Text * Multiplication * 8);
        } else if (Select > Transform ) {
            let Multiplication = Math.pow(Bytes, Math.abs(Select - Transform));
            return (Text * Multiplication);
        } else {
            let Multiplication = Math.pow(Bytes, Math.abs(Select - Transform));
            return (Text / Multiplication);
        }
    
    } else {
        console.log("البيانات غير مكتمله");
        return false;
    }
}