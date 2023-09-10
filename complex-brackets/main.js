import { dataBalanced } from "./examples/dataBalanced.js";
import { dataImbalanced } from "./examples/dataImbalanced.js";

console.info("\x1b[34m%s\x1b[0m", "() Hello COMPLEX brackets ()");

async function complexBracketsBalancedHandler(inputString, bracketConfig) {
  // split the string into chars
  const charArray = inputString.split("");

  if (charArray.length === 0) {
    // opinionated - we didn't get any brackets, so are we technically 'balanced' ?
    return true;
  }

  let balanceFactor = 0;
  for (const char of charArray) {
    for (const bracketPair of bracketConfig.bracketPairs) {
      if (char === bracketPair.open) {
        balanceFactor++;
      }
      if (char === bracketPair.close && balanceFactor > 0) {
        balanceFactor--;
      }
    }
  }

  // javascript will evaluate > 0 to be true
  if (balanceFactor > 0) {
    return false;
  }

  // fallthru
  return true;
}

async function mainLoop() {
  const bracketConfig = {
    bracketPairs: [
      { open: "(", close: ")" },
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "8", close: "9"}
    ],
  };

  // example: `()`
  let balanceFails = 0;
  for (const inputExample of dataBalanced) {
    let isBalanced = await complexBracketsBalancedHandler(
      inputExample,
      bracketConfig
    );
    if (!isBalanced) {
      console.log("Fail for ", inputExample);
      balanceFails++;
    }
  }

  // example `(()`
  let imBalanceFails = 0;

  for (const inputExample of dataImbalanced) {
    let isBalanced = await complexBracketsBalancedHandler(
      inputExample,
      bracketConfig
    );

    if (isBalanced) {
      console.log("Fail for ", inputExample);
      imBalanceFails++;
    }
  }

  if (balanceFails || imBalanceFails) {
    console.error(
      "** Some assertions failed. Total assertions:",
      dataBalanced.length + dataImbalanced.length,
      "Total fails:",
      balanceFails + imBalanceFails,
      "Balanced fails: ",
      balanceFails,
      "Imbalanced fails:",
      imBalanceFails
    );
  } else {
    console.log(
      "** Great success, no assertions failed. Total assertions:",
      dataBalanced.length + dataImbalanced.length
    );
  }
}

mainLoop();
