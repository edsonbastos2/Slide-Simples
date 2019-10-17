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
const api = fetch('https://dt11.pepblast.com/pzAlbums_php03/PSO/PSOApi.php?client=HTML&app=PLUGIN&m=pso.remix.getRemixPars&args={%22rid%22:%22x85in000149b85wn0lamsj%22,%22av%22:%22v1%22,%22esort%22:0,%22easc%22:0,%22getappelements%22:1,%22getinputusers%22:1,%22getpropsjs%22:1,%22getisfollower%22:1,%22usecreatoresort%22:1,%22enmax%22:120}');

const urlImg = 'https://movt11.pepblast.com/RMX_PHOTO/'

const extensaoImg = '.jpg';

api.then(r => r.json())

    .then(data => {

        let info = data.getRemixApprovedElements.its_media;

        let arrayImg = [];

        info.forEach(function (img) {
            image = urlImg + img.eid + extensaoImg;
            let elemento = document.getElementById('imageBg');
            let div = document.createElement('div');
            div.innerHTML = `<img src=${image} />`;
            elemento.appendChild(div);
            console.log(image);

        });
        
    });
