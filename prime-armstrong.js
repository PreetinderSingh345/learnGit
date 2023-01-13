function checkArmstrong(num) {
    let copy=num

    let digitSum=0

    while(copy!=0) {
        let digit=copy%10

        digitSum+=digit

        copy/=10
    }

    let isArmstrong=(num==totalSum)

    return isArmstrong
}

function checkPrime(num) {
    let isPrime=true

    for(let div=2; div<num; div++) {
        if((num%div)==0) {
            isPrime=false;

            break
        }
    }

    return isPrime
}