//1
function getDataStr(arr){
    //Ввести неправильную дату можно, но только до 31 числа. Если такой даты не существует, то месяц сменится на следующий.
    let d = new Date(arr[0] + '-' + arr[1] + '-' + arr[2]).toLocaleDateString();
    if(isNaN(d)){
        console.log(d);
    } else console.log(new Date().toLocaleDateString());
}
console.log("Task #1");
getDataStr([2019, 2, 28]);
//2
function transform(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i]=arr[i].trim();
        if(arr[i]=="") {
            arr.splice(i, 1);
            i--;
        }
    }
    arr.sort();
    let l = arr[arr.length-1].length;
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i].length<l) arr[i]= " ".repeat(l-arr[i].length) + arr[i];       
    }
    console.log(arr);
}
console.log("Task #2");
transform(["asdfasdf   ","   23423","    ","  2323  ","          123"]);