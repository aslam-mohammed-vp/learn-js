//const products = fetch('https://dummyjson.com/products');
// creating promise equivalent to above code

// let products = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(new Response(JSON.stringify(['1', '2'])));
//     }, 3000);
// });

//console.log('first:', products);

// products
//     .then((res) => {
//         //console.log('Response:', res.json());
//         return res.json();
//     })
//     .then((data) => {
//         console.log('Data:', data);
//     });


// Promise APIs 

function createPromise(id, delay, isReject = false) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isReject) {
                reject('Rejected:' + id)
            }
            resolve('Resolved:' + id)
        }, delay)
    })
}

// let p1 = createPromise('p1', 1000);
// let p2 = createPromise('p2', 2000);
// let p3 = createPromise('p3', 3000, true);

// Promise.all([p1, p2, p3]) // 
//     .then(res => {
//         console.log('res:', res);
//     })
//     .catch(err => {
//         console.log('err:', err);
//     })

//all
// Promise.all([Promise.resolve('resovled1'), Promise.resolve('resovled2')])
//     .then(res => {
//         console.log('res:', res);
//     })
//     .catch(err => {
//         console.log('err:', err);
//     });
// Promise.all([Promise.resolve('resovled1'), Promise.reject('rejected2')])
//     .then(res => {
//         console.log('res:', res);
//     })
//     .catch(err => {
//         console.log('err:', err);
//     });

// allSettled
// Promise.allSettled([Promise.resolve('resovled1'), Promise.resolve('resovled2')])
//     .then(res => {
//         console.log('res:', res);
//     })
//     .catch(err => {
//         console.log('err:', err);
//     });
// Promise.allSettled([Promise.resolve('resovled1'), Promise.reject('rejected2')])
//     .then(res => {
//         console.log('res:', res);
//     })
//     .catch(err => {
//         console.log('err:', err);
//     });

// Promise.allSettled([Promise.reject('rejected1'), Promise.reject('rejected2')])
//     .then(res => {
//         console.log('res:', res);
//     })
//     .catch(err => {
//         console.log('err:', err);
//     });

Promise.any([Promise.reject('rejected1'), Promise.reject('rejected2')])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
        console.error('error:', err.errors)
    })


