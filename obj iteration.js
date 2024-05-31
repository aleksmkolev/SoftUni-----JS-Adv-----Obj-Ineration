function solve (data){

let res = {}

for (let i = 0; i < data.length; i+=2) {
    let key = data[i]
    let value = Number(data[i+1])

    res[key] = value
    
}


console.log(res);
}
solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])