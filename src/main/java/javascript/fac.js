const log =  console.log

const fact = n => n==0 ? 1 : n * fact(n-1)

log(fact(3))
log(fact(4))