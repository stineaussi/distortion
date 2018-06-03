"use strict";

document.addEventListener("DOMContentLoaded", load);

        function load(){
        getJson();
        
        async function getJson(){

            let jsonFetch = await fetch("https://kea-alt-del.dk/kata-distortion/"); 
            let jsonObject = await jsonFetch.json();

            document.querySelector(".number h1").textContent = jsonObject.inQueue;

            if(jsonObject.inQueue == 0){
                
            }if(jsonObject.inQueue >= 1){
                document.querySelector(".bi").style.display = "block";
            }if(jsonObject.inQueue >= 2){
                document.querySelector(".bi2").style.display = "block";
            }if(jsonObject.inQueue >= 3){
                document.querySelector(".bi3").style.display = "block";
            }if(jsonObject.inQueue >= 4){
                document.querySelector(".bi4").style.display = "block";
            }if(jsonObject.inQueue >= 5){
                document.querySelector(".bi5").style.display = "block";
            }if(jsonObject.inQueue >= 6){
                document.querySelector(".bi6").style.display = "block";
            }if(jsonObject.inQueue >= 7){
                document.querySelector(".bi7").style.display = "block";
            }if(jsonObject.inQueue >= 8){
                document.querySelector(".bi8").style.display = "block";
            }if(jsonObject.inQueue >= 9){
                document.querySelector(".bi9").style.display = "block";
            }if(jsonObject.inQueue >= 10){
                document.querySelector(".bi10").style.display = "block";
            }if(jsonObject.inQueue >= 11){
                document.querySelector(".bi11").style.display = "block";
            }if(jsonObject.inQueue >= 12){
                document.querySelector(".bi12").style.display = "block";
            }if(jsonObject.inQueue >= 13){
                document.querySelector(".bi13").style.display = "block";
            }if(jsonObject.inQueue >= 14){
                document.querySelector(".bi14").style.display = "block";
            }if(jsonObject.inQueue >= 15){
                document.querySelector(".bi15").style.display = "block";
            }if(jsonObject.inQueue >= 16){
                document.querySelector(".bi16").style.display = "block";
            }if(jsonObject.inQueue >= 17){
                document.querySelector(".bi17").style.display = "block";
            }if(jsonObject.inQueue >= 18){
                document.querySelector(".bi18").style.display = "block";
            }if(jsonObject.inQueue >= 19){
                document.querySelector(".bi19").style.display = "block";
            }if(jsonObject.inQueue >= 20){
                document.querySelector(".bi20").style.display = "block";
            }if(jsonObject.inQueue >= 21){
                document.querySelector(".bi21").style.display = "block";
            }if(jsonObject.inQueue >= 22){
                document.querySelector(".bi22").style.display = "block";
            }if(jsonObject.inQueue >= 23){
                document.querySelector(".bi23").style.display = "block";
            }if(jsonObject.inQueue >= 24){
                document.querySelector(".bi24").style.display = "block";
            }if(jsonObject.inQueue >= 25){
                document.querySelector(".bi25").style.display = "block";
            }

        };
        }
        setInterval(load, 3000);