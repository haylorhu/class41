let result = `
/*
*用动画的形式介绍自己
*加一点样式
*/
*{
    transittion:all 3s;
}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    border:1px solid red;
    padding:16px;
    transform: rotate(360deg);
}
/* 加点3D效果*/
#code{
    transform: rotate(360deg);
    position:fixed;
    left:0;
    width:50%
    height:50%
}
#p{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    padding:16px;
    background:rgb(322,322,322);

}

`
var md = `#自我介绍
我叫XXX
今年18岁
在饥人谷学习

1.xxx
2.xxxxxx
3.xxxxxxxxxxxx


`


function writeCode(code,fn){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() =>{
        n += 1
        domCode.innerHTML = Prism.highlight(code.substring(0,n),Prism.languages.css)
        styleTag.innerHTML = code.substring(0,n)
        if (n > code.length){
            window.clearInterval(id)
            fn.call()
        }
    },10)
}
function writeMd(){
    let pap = document.querySelector('#p')
    let n = 0
    let id1 = setInterval(() =>{
        n += 1
        pap.innerHTML =md.substring(0,n)

        if (n > md.length){
            window.clearInterval(id1)
        }
    },10)
}

writeCode(result,()=>{creatPaper(()=>{writeMd()})})

function creatPaper(fn){
    var paper = document.createElement('pre')
    paper.id = 'p'
    document.body.appendChild(paper)
    fn.call()

}

