import { dataBalanced } from "./examples/dataBalanced.js";
import { dataImbalanced } from "./examples/dataImbalanced.js";

console.info("\x1b[34m%s\x1b[0m", "() Hello SIMPLE brackets ()");

/*

    Don't forget nodejs async/await gotchas

*/
async function simpleBracketsBalancedHandler(inputString) {
  // split the string into chars
  const charArray = inputString.split("");

  if (charArray.length === 0) {
    // opinionated - we didn't get any brackets, so are we technically 'balanced' ?
    return true;
  }

  // removed: An even char count check only makes sense if the string
  // only contains brackets, but if it contains arbitrary data
  // like (123) then it fails because we now have an odd total char count

  // it doesn't contain either set of brackets so it's nonsense
  if (!charArray.includes("(") && !charArray.includes(")")) {
    // opinionated - it's not got any brackets so is this 'balanced' ?
    console.error("! No brackets found for `", inputString, "`");
    return true;
  }

  let balanceFactor = 0;
  charArray.forEach((char) => {
    if (char === "(") {
      balanceFactor++;
    }
    if (char === ")" && balanceFactor > 0) {
      balanceFactor--;
    }
  });

  // javascript will evaluate > 0 to be true
  if (balanceFactor > 0) {
    return false;
  }

  // fallthru
  return true;
}

async function mainLoop() {
  // example: `()`
  let balanceFails = 0;

  for (const inputExample of dataBalanced) {
    let isBalanced = await simpleBracketsBalancedHandler(inputExample);
    if (!isBalanced) {
      console.log("Fail for ", inputExample);
      balanceFails++;
    }
  }

  // example `(()`
  let imBalanceFails = 0;

  for (const inputExample of dataImbalanced) {
    let isBalanced = await simpleBracketsBalancedHandler(inputExample);

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
