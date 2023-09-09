export const assertImbalanced = (booleanBalanced) => {
    if (booleanBalanced) {
        // not balanced - which is correct
        return false;
    }
    // fallthru - balanced 
    console.error("! Balanced, should've been imbalanced")
    return true;
    
}

export default assertImbalanced;