console.log("script.js loaded.");

let g1 = document.getElementById("g1");
let g2 = document.getElementById("g2");
let g3 = document.getElementById("g3");
let g4 = document.getElementById("g4");
let g5 = document.getElementById("g5");
let g6 = document.getElementById("g6");
let g7 = document.getElementById("g7");
let g8 = document.getElementById("g8");
let g9 = document.getElementById("g9");
let colorr = document.getElementById("color-r");
let colorx = document.getElementById("color-x");
let colorz = document.getElementById("color-z");
let colora = document.getElementById("color-a");
let colord = document.getElementById("color-d");
let colorq = document.getElementById("color-q");

document.addEventListener('contextmenu' , event => {
    event.preventDefault();
});

g1.addEventListener('click',(event)=>{
    g1.style.background = colorr.value;
    if (event.altKey){
        g1.style.background = colorx.value;
    }
    if (event.metaKey){
        g1.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g1.style.background = colora.value;
    }
    if (event.shiftKey) {
        g1.style.background = colord.value;
    }
    g1.oncontextmenu = () => {
        g1.style.background = colorq.value;
    }
});

g2.addEventListener('click',(event)=>{
    g2.style.background = colorr.value;
    if (event.altKey){
        g2.style.background = colorx.value;
    }
    if (event.metaKey){
        g2.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g2.style.background = colora.value;
    }
    if (event.shiftKey) {
        g2.style.background = colord.value;
    }
    g2.oncontextmenu = () => {
        g2.style.background = colorq.value;
    }
});

g3.addEventListener('click',(event)=>{
    g3.style.background = colorr.value;
    if (event.altKey){
        g3.style.background = colorx.value;
    }
    if (event.metaKey){
        g3.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g3.style.background = colora.value;
    }
    if (event.shiftKey) {
        g3.style.background = colord.value;
    }
    g3.oncontextmenu = () => {
        g3.style.background = colorq.value;
    }
});


g4.addEventListener('click',(event)=>{
    g4.style.background = colorr.value;
    if (event.altKey){
        g4.style.background = colorx.value;
    }
    if (event.metaKey){
        g4.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g4.style.background = colora.value;
    }
    if (event.shiftKey) {
        g4.style.background = colord.value;
    }
    g4.oncontextmenu = () => {
        g4.style.background = colorq.value;
    }
});

g5.addEventListener('click',(event)=>{
    g5.style.background = colorr.value;
    if (event.altKey){
        g5.style.background = colorx.value;
    }
    if (event.metaKey){
        g5.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g5.style.background = colora.value;
    }
    if (event.shiftKey) {
        g5.style.background = colord.value;
    }
    g5.oncontextmenu = () => {
        g5.style.background = colorq.value;
    }
});

g6.addEventListener('click',(event)=>{
    g6.style.background = colorr.value;
    if (event.altKey){
        g6.style.background = colorx.value;
    }
    if (event.metaKey){
        g6.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g6.style.background = colora.value;
    }
    if (event.shiftKey) {
        g6.style.background = colord.value;
    }
    g6.oncontextmenu = () => {
        g6.style.background = colorq.value;
    }
});


g7.addEventListener('click',(event)=>{
    g7.style.background = colorr.value;
    if (event.altKey){
        g7.style.background = colorx.value;
    }
    if (event.metaKey){
        g7.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g7.style.background = colora.value;
    }
    if (event.shiftKey) {
        g7.style.background = colord.value;
    }
    g7.oncontextmenu = () => {
        g7.style.background = colorq.value;
    }
});

g8.addEventListener('click',(event)=>{
    g8.style.background = colorr.value;
    if (event.altKey){
        g8.style.background = colorx.value;
    }
    if (event.metaKey){
        g8.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g8.style.background = colora.value;
    }
    if (event.shiftKey) {
        g8.style.background = colord.value;
    }
    g8.oncontextmenu = () => {
        g8.style.background = colorq.value;
    }
});

g9.addEventListener('click',(event)=>{
    g9.style.background = colorr.value;
    if (event.altKey){
        g9.style.background = colorx.value;
    }
    if (event.metaKey){
        g9.style.background = colorz.value;
    }
    if (event.ctrlKey){
        g9.style.background = colora.value;
    }
    if (event.shiftKey) {
        g9.style.background = colord.value;
    }
    g9.oncontextmenu = () => {
        g9.style.background = colorq.value;
    }
});

document.onkeydown = (event) => {
    if (event.key === "c") {
    g1.style.background = `none`;
    g2.style.background = `none`;
    g3.style.background = `none`;
    g4.style.background = `none`;
    g5.style.background = `none`;
    g6.style.background = `none`;
    g7.style.background = `none`;
    g8.style.background = `none`;
    g9.style.background = `none`;
    }
}