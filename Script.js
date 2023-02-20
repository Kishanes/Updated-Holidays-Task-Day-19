var globalData = []
const formElement = document.createElement('form')
var currentidx = 0
var maxIndex= 0
const fun1 = async(code) =>{
   
    var table = $('#table-body')
    const valu = await fetch(`https://holidays.abstractapi.com/v1/?api_key=ebcc9123161447b58e02f6e27f3e5302&country=`+code+`&year=2020&month=12`)
    const result = await valu.json()
    globalData = result
    $("#table-body").empty();
    maxIndex = result.length
    var j=1;
    for (var i =0 ;i<maxIndex; i++ ) {
        
        var row = `<tr>
            <td>${j}</td>
            <td>${globalData[i].location}</td>
            <td>${globalData[i].name}</td>
            <td>${globalData[i].type}</td>
            <td>${globalData[i].date}</td>
            
            
            `;
            j++;
    table.append(row)
    }
    $("#resultDiv").show();
}







const inputEle = document.getElementById('form');

inputEle.addEventListener('submit',(e)=>{
    $("#resultDiv").hide();
    e.preventDefault();
    const inputValue = document.getElementById('code')
    fun1(inputValue.value); 
})


