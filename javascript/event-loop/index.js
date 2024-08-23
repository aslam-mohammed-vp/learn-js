
let tick = 0;
console.log('console1');

setTimeout(function () {
    console.log('timeout');
}, 0)

const x = async function () {
    await fetch('https://dummyjson.com/products');
    console.log('api call done')
}

x();

console.log('Hello => number 1');
// setImmediate(() => {
//     console.log('Running setImmediate');
// });

// process.nextTick(() => {
//     console.log('Tick No:', tick++);
// });

