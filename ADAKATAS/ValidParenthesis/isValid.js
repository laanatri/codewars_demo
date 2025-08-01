const isValid= (str) => {
    let toCheck = [["(", ")"], ["{", "}"], ["[", "]"]];
    let results = [true, true, true]
    for (let i = 0; i < str.length; i++) {
        for (let e = 0; e < toCheck.length; e++) {
            if (str.charAt(i) === toCheck[e][0] && results[e] === true) {
                results[e] = false;
            }
            if (str.charAt(i) === toCheck[e][1] && results[e] === false) {
                results[e] = true;
            }
        }
    }
    console.log(results.every(Boolean));
    return;
}

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([])");