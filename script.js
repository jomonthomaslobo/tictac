function loadBox(){
var str="";
document.getElementById("box").innerHTML=str;
for(i=0;i<3;i++){
    str+="<br/>";
    for(j=0;j<3;j++){
        
        str+="<div class=' box' style='border:1px solid black;margin:1em;height:100px;width:25%;display:inline-flex' id='"+i+j+"' onclick='changeColor("+i+","+j+")'></div>";
    }
    str+="";
}
document.getElementById("box").innerHTML=str;
}
function resetAll(){
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            id =i.toString()+j.toString();
            document.getElementById(id).style.backgroundColor="white";
        }
    }
    
    
}
function changeColor(i,j){
    id =i.toString()+j.toString();
    color=getRandomColor();
    document.getElementById(id).style.backgroundColor=color;
}
function getRandomColor(){
    //function will generate a color code
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
     }
    return color;
}