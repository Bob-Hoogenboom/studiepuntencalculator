//afgerond
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

//declaraties Cluster 1
let studiepuntenHaalbaarCluster1 = document.getElementById("studiepuntenHaalbaarCluster1").innerHTML;
let studiepuntenBehaaldCluster1 = document.getElementById("studiepuntenBehaaldCluster1");
let PROJ = document.getElementById('PROJ');
let SCT = document.getElementById('SCT');
let gemiddledeCluster1 = document.getElementById('gemiddledeCluster1');
//function Cluster 1
PROJ.addEventListener('input', berekenGemiddeldeCluster1);
SCT.addEventListener('input', berekenGemiddeldeCluster1);
function berekenGemiddeldeCluster1()
  {
    let gemiddelde = (parseFloat(PROJ.value) + parseFloat(SCT.value))/2;
    gemiddledeCluster1.innerHTML = round(gemiddlede, 1);
    if(gemiddelde >= 5.5)
      {studiepuntenBehaaldCluster1.innerHTML = studiepuntenHaalbaarCluster1;
    }
    else {studiepuntenBehaaldCluster1.innerHTML = 0;}
    berekenTotaalSP();

    if (gemiddledeCluster1.innerHTML == "NaN") {
  gemiddledeCluster1.innerHTML = "";
    }

    if (parseFloat(PROJ.value) >= 11 ) {
      gemiddledeCluster1.innerHTML = "Een cijfer </br> is boven </br> de 10, dit</br> kan niet!";
      studiepuntenBehaaldCluster1.innerHTML = "Een cijfer </br> is boven </br> de 10, dit</br> kan niet!";

    }

    if (parseFloat(SCT.value) >= 11 ) {
      gemiddledeCluster1.innerHTML = "Een cijfer </br> is boven </br> de 10, dit</br> kan niet!";
      studiepuntenBehaaldCluster1.innerHTML = "Een cijfer </br> is boven </br> de 10, dit</br> kan niet!";
    }
  }

  //declaraties Cluster 2
  let studiepuntenHaalbaarCluster2 = document.getElementById("studiepuntenHaalbaarCluster2").innerHTML;
  let studiepuntenBehaaldCluster2 = document.getElementById("studiepuntenBehaaldCluster2");
  let PRO = document.getElementById('PRO');
  let DVT = document.getElementById('DVT');
  let DIP = document.getElementById('DIP');
  let gemiddeldeCluster2 = document.getElementById('gemiddeldeCluster2');
  //function Cluster 2
  PRO.addEventListener('input', berekenGemiddeldeCluster2);
  DVT.addEventListener('input', berekenGemiddeldeCluster2);
  DIP.addEventListener('input', berekenGemiddeldeCluster2);
  function berekenGemiddeldeCluster2()
  {
    let gemiddelde = (parseFloat(PRO.value) + parseFloat(DVT.value) + parseFloat(DIP.value))/3;
    gemiddelde = Math.round(gemiddelde *10)/10 ;
    gemiddledeCluster2.innerHTML = Round(gemiddlede, 1);
    if(gemiddelde >= 5.5){
      studiepuntenBehaaldCluster2.innerHTML = studiepuntenHaalbaarCluster2;
    }
    else {studiepuntenBehaaldCluster2.innerHTML = 0;}
    berekenTotaalSP();
  }

  //declaraties Cluster 3
  let studiepuntenHaalbaarCluster3 = document.getElementById("studiepuntenHaalbaarCluster3").innerHTML;
  let studiepuntenBehaaldCluster3 = document.getElementById("studiepuntenBehaaldCluster3");
  let SLB = document.getElementById('SLB');
  let WVO = document.getElementById('WVO');
  let BUR = document.getElementById('BUR');
  let gemiddeldeCluster3 = document.getElementById('gemiddeldeCluster3');
  //function Cluster 3
  SLB.addEventListener('input', berekenGemiddeldeCluster3);
  WVO.addEventListener('input', berekenGemiddeldeCluster3);
  BUR.addEventListener('input', berekenGemiddeldeCluster3);
  function berekenGemiddeldeCluster3()
  {
    let gemiddelde = (parseFloat(SLB.value) + parseFloat(WVO.value) + parseFloat(BUR.value))/3;

    gemiddelde = Math.round(gemiddelde *10)/10 ;
    gemiddledeCluster3.innerHTML = Round(gemiddlede, 1);
    if(gemiddelde >= 5.5){
      studiepuntenBehaaldCluster3.innerHTML = studiepuntenHaalbaarCluster3;
    }
    else {studiepuntenBehaaldCluster3.innerHTML = 0;}
    berekenTotaalSP();
  }

  //declaraties Cluster 4
  let studiepuntenHaalbaarCluster4 = document.getElementById("studiepuntenHaalbaarCluster4").innerHTML;
  let studiepuntenBehaaldCluster4 = document.getElementById("studiepuntenBehaaldCluster4");
  let ENG = document.getElementById('ENG');
  let NED = document.getElementById('NED');
  let REK = document.getElementById('REK');
  let gemiddeldeCluster4 = document.getElementById('gemiddeldeCluster4');
  //function Cluster 4
  ENG.addEventListener('input', berekenGemiddeldeCluster4);
  NED.addEventListener('input', berekenGemiddeldeCluster4);
  REK.addEventListener('input', berekenGemiddeldeCluster4);
  function berekenGemiddeldeCluster4()
  {
    let gemiddelde = (parseFloat(ENG.value) + parseFloat(NED.value) + parseFloat(REK.value))/3;

    gemiddelde = Math.round(gemiddelde *10)/10 ;
    gemiddledeCluster4.innerHTML = Round(gemiddlede, 1);
    if(gemiddelde >= 5.5){
      studiepuntenBehaaldCluster4.innerHTML = studiepuntenHaalbaarCluster4;
    }
    else {studiepuntenBehaaldCluster4.innerHTML = 0;}
    berekenTotaalSP();
  }

//declaraties Cluster 5
let studiepuntenHaalbaarCluster5 = document.getElementById("studiepuntenHaalbaarCluster5").innerHTML;
let studiepuntenBehaaldCluster5 = document.getElementById("studiepuntenBehaaldCluster5");
let DIFF = document.getElementById('DIFF');
let gemiddeldeCluster5 = document.getElementById('gemiddeldeCluster5');
//function Cluster 3
DIFF.addEventListener('input', berekenGemiddeldeCluster5);
function berekenGemiddeldeCluster5()
{
  let gemiddelde = (parseFloat(DIFF.value))
  gemiddledeCluster5.innerHTML = Round(gemiddlede, 1);
  if(gemiddelde >= 5.5){
    studiepuntenBehaaldCluster5.innerHTML = studiepuntenHaalbaarCluster5;
  }
  else {studiepuntenBehaaldCluster5.innerHTML = 0;}
  berekenTotaalSP();
}


let totaalSP = document.getElementById('totaalSP');
  function berekenTotaalSP()
  {
    totaalSP.innerHTML = parseFloat(studiepuntenBehaaldCluster1.innerHTML)+
    parseFloat(studiepuntenBehaaldCluster2.innerHTML) +
    parseFloat(studiepuntenBehaaldCluster3.innerHTML) +
    parseFloat(studiepuntenBehaaldCluster4.innerHTML) +
    parseFloat(studiepuntenBehaaldCluster5.innerHTML);
    totaalSP.innerHTML = studiepuntenTotaal;

    if (totaalSP.innerHTML == "NaN") {
      totaalSP.innerHTML = ""
    }
  }
