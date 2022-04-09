const valdata = num => {
    const val1 = num.toString();
    const val = val1.split('');
    let lastReturnVal = 0;
    if (val.length > 2) {
        return -1;
    } else {
        const funcCheckVal = sqrCHeck(val);
        lastReturnVal = lastReturnVal+ 1;
        if (funcCheckVal == 1) {
            return lastReturnVal;
        } else {
            sqrCHeck(val);
        }
    }
}

const sqrCHeck = val => {
    let returnVal = 0;
    val.forEach(x => {
      // eslint-disable-next-line no-use-before-define
       returnVal = returnVal + Math.pow(val, 2);
    });
    return returnVal;
}
console.log(valdata(45));