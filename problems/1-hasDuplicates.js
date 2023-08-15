// check if array has duplicates O(n2)

function hasDuplicates(...args){
    for(let i=0; i<args.length; i++){
        for(let j=i+1; j < args.length; j++){
            if(args[i]===args[j] && i !== j) return true;
        }
    }
    return false;
}


const t0 = performance.now();
console.log(hasDuplicates(1,2,3,11,4,5,6));
const t1 = performance.now();
console.log(`Call to hasDuplicates took ${t1 - t0} milliseconds.`);


function hasDuplicates2(...args){
    const m = new Map();

    for(let num of args){
        if(m.has(num)) return true;
        else m.set(num, true);
    }

    return false;
}

function hasDuplicates3(...args){
    const object = new Object();

    for(let num of args){
        if(object[num]) return true;
        else object[num] = true;
    }

    return false;
}

const t2 = performance.now();
console.log(hasDuplicates2(1,2,3,11,4,5,6));
const t3 = performance.now();
console.log(`Call to hasDuplicates2 took ${t3 - t2} milliseconds.`);