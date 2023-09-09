import {dataBalanced} from './examples/dataBalanced.js';
import {dataImbalanced} from './examples/dataImbalanced.js';

import {assertBalanced} from './assertBalanced.js';
import {assertImbalanced} from './assertImbalanced.js';

console.info('() Hello SIMPLE brackets ()');

/*

    @todo something is wrong because `"(123)(())",`
    is asserting as balanced when it has 3 open brackets and only 2 closed

*/
async function simpleBracketsBalancedHandler(inputString) {

    // split the string into chars 
    const charArray = inputString.split("");


    if (charArray.length === 0) {
        // opinionated - we didn't get any brackets, so are we technically 'balanced' ?
        return true;
    }

    if (charArray.length % 2 !== 0) {
        // isn't an even number so we can fail early without looping
        return false;
    }

    // it doesn't contain either set of brackets so it's nonsense
    if (!charArray.includes('(') && !charArray.includes(')')) {
        // opinionated - it's not got any brackets so is this 'balanced' ?
        return true;
    }

    let balanceFactor = 0;
    charArray.forEach(char => {
        if (char === '(') {
            balanceFactor++;
        }
        if (char === ')' && balanceFactor > 0) {
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

// example: `()`
let balanceFails = 0;
dataBalanced.forEach(inputExample => {
    
    if (!assertBalanced(simpleBracketsBalancedHandler(inputExample))) {
        balanceFails++;
    }
});


// example `(()`
let imBalanceFails = 0;
dataImbalanced.forEach(inputExample => {
    
    if (assertImbalanced(simpleBracketsBalancedHandler(inputExample))) {
        imBalanceFails++;
    }

});

if (balanceFails || imBalanceFails) {
    console.error('** Some assertions failed. Total assertions:',
                    dataBalanced.length + dataImbalanced.length,
                    'Total fails:',
                    balanceFails + imBalanceFails,
                    'Balanced fails: ',
                    balanceFails,
                    'Imbalanced fails:',
                    imBalanceFails);
} else {
    console.log('** Great success, no assertions failed. Total assertions:',
    dataBalanced.length + dataImbalanced.length);
}
