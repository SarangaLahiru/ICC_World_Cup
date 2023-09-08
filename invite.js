var times=0;
var container=document.querySelector('.container')

console.log(times)
function times1(){
    times+=1;
    console.log(times)

    if(times==1){
        clearInterval(timesCount)
        container.classList.add('v1')



    }

}
var timesCount=setInterval(times1,1000)

const urlParams = new URLSearchParams(window.location.search);
        const imageName = urlParams.get('image');
        const lecturerPosition = urlParams.get('position');
var invitation=document.querySelector('.invitation')
var dis=invitation.querySelector('.dis')
var h2=dis.getElementsByTagName('h2')[0]
var h3=dis.getElementsByTagName('h3')[0]
var image=document.getElementById('img')

image.src='./invitations/'+imageName+'.jpg';



console.log(image.src)