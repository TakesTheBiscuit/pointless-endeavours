export const assertBalanced = (booleanBalanced) => {
    if (booleanBalanced) {
        // we could've returned `booleanBalanced`
        return true;
    }
    // fallthru - not balanced 
    console.error("! Not balanced, should've been balanced")
    return false;
    
}

export default assertBalanced;