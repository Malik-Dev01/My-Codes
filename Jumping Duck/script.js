let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
let d7 = document.getElementById("d7");
let d8 = document.getElementById("d8");
let d9 = document.getElementById("d9");
let d10 = document.getElementById("d10");
let d11= document.getElementById("d11");
let d12 = document.getElementById("d12");
let d13 = document.getElementById("d13");
let d14 = document.getElementById("d14");
let d15 = document.getElementById("d15");
let d16 = document.getElementById("d16");
let d17 = document.getElementById("d17");
let d18 = document.getElementById("d18");
let d19 = document.getElementById("d19");
let d20 = document.getElementById("d20");
let d21 = document.getElementById("d21");
let d22 = document.getElementById("d22");
let d23= document.getElementById("d23");
let d24= document.getElementById("d24");
let h = document.querySelector(".h");
let buffer = 0;
let x = document.querySelector(".x");
let a = document.querySelector(".inp");
let time = 750;
//duck complete
let s1 = 14 , s2 = 13 , s3 = 13 , s4 = 14 , s5 = 12 , s6 = 11 , s7 = 11 , s8 = 11 , s9 = 12 , s10 = 11 , s11 = 11 , s12 = 12 , s13 = 10 , s14 = 10 , s15 = 10 , s16 = 9 , s17 = 9 , s18 = 10 , s19 = 10 , s20 = 9 , s21 = 11 , s22 = 11 , s23 = 8 , s24 = 10;



const jump = () => {
    s1--;
    s2--;
    s3--;
    s4--;
    s5--;
    s6--;
    s7--;
    s8--;
    s9--;
    s10--;
    s11--;
    s12--;
    s13--;
    s14--;
    s15--;
    s16--;
    s17--;
    s18--;
    s19--;
    s20--;
    s21--;
    s22--;
    s23--;
    s24--;
    d1.style.gridArea = `${s1} / 8`;
    d2.style.gridArea = `${s2} / 8`;
    d3.style.gridArea = `${s3} / 10`;
    d4.style.gridArea = `${s4} / 10`;
    d5.style.gridArea = `${s5} / 8`;
    d6.style.gridArea = `${s6} / 7`;
    d7.style.gridArea = `${s7} / 8`;
    d8.style.gridArea = `${s8} / 8`;
    d9.style.gridArea = `${s9} / 9`;
    d10.style.gridArea = `${s10} / 9`;
    d11.style.gridArea = `${s11} / 10`;
    d12.style.gridArea = `${s12} / 10`;
    d13.style.gridArea = `${s13} / 8`;
    d14.style.gridArea = `${s14} / 9`;
    d15.style.gridArea = `${s15} / 10`;
    d16.style.gridArea = `${s16} / 10`;
    d17.style.gridArea = `${s17} / 11`;
    d18.style.gridArea = `${s18} / 11`;
    d19.style.gridArea = `${s19} / 12`;
    d20.style.gridArea = `${s20} / 12`;
    d21.style.gridArea = `${s21} / 11`;
    d22.style.gridArea = `${s22} / 12`;
    d23.style.gridArea = `${s23} / 11`;
    d24.style.gridArea = `${s24} / 13`;
    s1++;
    s2++;
    s3++;
    s4++;
    s5++;
    s6++;
    s7++;
    s8++;
    s9++;
    s10++;
    s11++;
    s12++;
    s13++;
    s14++;
    s15++;
    s16++;
    s17++;
    s18++;
    s19++;
    s20++;
    s21++;
    s22++;
    s23++;
    s24++;
    setTimeout(function(){
        d1.style.gridArea = `${s1} / 8`;
        d2.style.gridArea = `${s2} / 8`;
        d3.style.gridArea = `${s3} / 10`;
        d4.style.gridArea = `${s4} / 10`;
        d5.style.gridArea = `${s5} / 8`;
        d6.style.gridArea = `${s6} / 7`;
        d7.style.gridArea = `${s7} / 8`;
        d8.style.gridArea = `${s8} / 8`;
        d9.style.gridArea = `${s9} / 9`;
        d10.style.gridArea = `${s10} / 9`;
        d11.style.gridArea = `${s11} / 10`;
        d12.style.gridArea = `${s12} / 10`;
        d13.style.gridArea = `${s13} / 8`;
        d14.style.gridArea = `${s14} / 9`;
        d15.style.gridArea = `${s15} / 10`;
        d16.style.gridArea = `${s16} / 10`;
        d17.style.gridArea = `${s17} / 11`;
        d18.style.gridArea = `${s18} / 11`;
        d19.style.gridArea = `${s19} / 12`;
        d20.style.gridArea = `${s20} / 12`;
        d21.style.gridArea = `${s21} / 11`;
        d22.style.gridArea = `${s22} / 12`;
        d23.style.gridArea = `${s23} / 11`;
        d24.style.gridArea = `${s24} / 13`;
        x.innerHTML = buffer;
    },200);
    buffer++;
}

const s = () => {
    h.innerHTML = new Date().toUTCString();
}
s()


setInterval(jump , time);
setInterval(s,1000);


