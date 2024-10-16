const { Person } = require("./Person");

function retPArr() {
    let pArr = [];
    let arr1 = ['Michael', 'John', 'Shaun', 'Rodriguez', 'Amit'];
    let arr2 = ['Michael@gmail.com', 'John@gmail.com', 'Shaun@gmail.com', 'Rodriguez@gmail.com', 'Amit@gmail.com'];
    for (let i = 0; i < arr1.length; i++) {
        let per = new Person(arr1[i], arr2[i]);
        pArr.push(per);
    }
    return pArr;
}
module.exports.retPArr = retPArr;