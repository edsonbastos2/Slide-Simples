let index = 0;
show();

diretorio = "./resources/";
    musicas = ["jeremy", "Black", "Alive"];
    musicaAtual = 0;        
    function next() {
        musicaAtual ++;
        document.getElementById("player-source").setAttribute("src", diretorio+musicas[musicaAtual]+".mp3");
        document.getElementById("player").load();
    }


function show(){
    let i;
    let slides=document.getElementsByClassName('slide');
    let dots=document.getElementsByTagName('span');
    for(let i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    index=index+1
    if(index>slides.length){
        index=1
    }

    for(let i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace('active', '')
    }
<<<<<<< HEAD

    slides[index-1].style.display = "block";
    dots[index-1].className+='active'
    setTimeout(show,5000)
    setTimeout(next, 2000)

}
=======
}

/*Consumir API rest*/
const url = 'https://dt11.pepblast.com/pzAlbums_php03/PSO/PSOApi.php?client=HTML&app=PLUGIN&m=pso.remix.getRemixPars&args={"rid":"x85in000149b85wn0lamsj","av":"v1","esort":0,"easc":0,"getappelements":1,"getinputusers":1,"getpropsjs":1,"getisfollower":1,"usecreatoresort":1,"enmax":120}';
//const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then( (response) => response.json())
    .then(function(data){ 
        console.log(data)
        
        return data.map(function(obj){
            let li = document.createElement('li');
            li.innerHTML = `${obj} ${obj}`
            ul.appendChild(li)
        })
    })
    .catch(err => console.log(err))
>>>>>>> ab07b283597d586f3e175abeaa364c60c12a1a93
