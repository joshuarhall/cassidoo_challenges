convertUnits = (num, unit) => {
  // unit describes the var num
  // possible units: ft, in, mi & mm, cm, m, km

  let temp;
  let returnVal = "";
  // imp to centimeters
  if (unit == "ft" || unit == "in" || unit == "mi") {
    if (unit == "in") {
      temp = num * 2.54;
    } else if (unit == "ft") {
      temp = num * 12 * 2.54;
    } else if (unit == "mi") {
      temp = num * 12 * 5280 * 2.54;
    }

    const km = Math.floor(temp / 100000);
    const m = Math.floor(temp / 100) - km * 1000;
    const cm = Math.floor(temp - km * 100000 - m * 100);
    const mm = Math.floor((temp % 1) * 100);

    const valuesArr = [km, m, cm, mm];
    const retStr = `${valuesArr[0]} km, ${valuesArr[1]} m, ${
      valuesArr[2]
    } cm, ${valuesArr[3] / 10} mm.`;
    return retStr;
  }

  //   if (unit == "mm" || unit == "cm" || unit == "m" || unit == "km") {
  //     // met to inches
  //     if (unit == "cm") {
  //       temp = num / 2.54;
  //     } else if (unit == "mm") {
  //       temp = (num / 2.54) * 10;
  //     } else if (unit == "m") {
  //       temp = (num / 2.54) * 100;
  //     } else if (unit == "km") {
  //       temp = (num * 1000 * 100) / 2.54;
  //     }

  //     console.log(`total inches = `, temp);

  //     const mi = Math.floor(temp / (12 * 5280));
  //     const ft = Math.floor((temp % (12 * 5280)) / 12);
  //     // console.log(mi);
  //     // console.log(ft); // should be 350, ft var is calculating wrong

  //     // make it language
  //     if (mi > 0) {
  //       returnVal = `${mi} miles, `;
  //     }

  //     returnVal = returnVal + `${ft} feet, ${temp % 12} inches.`;
  //     return returnVal;
  //   }

  return "didn't work ";

  // basic cm -> inch and vice versa
  // return unit == "cm" ? `${num * 2.54} centimeters` : `${num / 2.54} inches`;
};

// console.log(convertUnits(63, "in"));
// console.log(convertUnits(7, "ft")); // "2m 13cm 3.6mm"
console.log(convertUnits(2.5, "mi"));

// console.log(convertUnits(167, "mm"));
// console.log(convertUnits(44, "cm")); // "1ft 5.32in"
// console.log(convertUnits(5, "km"));
