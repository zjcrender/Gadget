/**
 * Created by REN on 2016/11/12.
 */

function factorialize(num) {
    if (num < 0) {
        return -1;
    }else if (num===0 || num===1) {
        return 1;
    }else {
        return num * arguments.callee(--num);
    }
}

console.log(factorialize(5));