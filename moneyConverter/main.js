function ConvertToDram(valNum){
    document.getElementById('outputAMD').innerHTML=valNum*7.79;
}
function ConvertToRub(valNum){
    document.getElementById('outputRUB').innerHTML=(valNum/7.79).toFixed(1);
}