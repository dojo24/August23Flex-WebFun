console.log('connected')
https://file+.vscode-resource.vscode-cdn.net/Users/irish/coding/work/CodingDojo/instruction/webFun/August23Flex-WebFun/lectures/week05/MockExam02/WireFrame.png?version%3D1693440919821
function changeText(ele) {
    var text = "You've subscribed!";
    ele.innerText = text
}

function changeMe(ele) {
    console.log(ele.src)
    // var img01 = './images/yuGiOhHeror.jpg'
    var img02 = './images/dragonBallHero.jpg'
    // if(ele.src == img01) {
    //     ele.src = img02
    // } else {
    //     ele.src = img01
    // }
    ele.src = img02
}
function changeMeBack(ele) {
    console.log(ele.src)
    var img01 = './images/yuGiOhHeror.jpg'
    var img02 = './images/dragonBallHero.jpg'
    if(ele.src == img01) {
        ele.src = img02
    } else {
        ele.src = img01
    }
}