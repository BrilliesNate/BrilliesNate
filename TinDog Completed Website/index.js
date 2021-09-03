let test = document.getElementById('test');
let ogThemeBackground = document.getElementById('originalThemeBackground')
let girlyBackground = document.getElementById('themeGirlyBackground');
let themeRow = document.getElementById('themeRow')
let menuPos = document.getElementById('menuBar')
let headingColor = document.getElementById('mainHeading');
let samllHeadinColor = document.getElementById('heading2')
let btnOgThem = document.getElementById('btn1');
let btnGirlyThem = document.getElementById('btn2');


function display() {
ogThemeBackground.style.display = "none"
girlyBackground.style.display = 'block';
// themeRow.style.marginRight = '500px';
// themeRow.style.marginTop = '100px';
menuPos.style.top = '50px';
headingColor.style.color = "#CC527A"
samllHeadinColor.style.color = ' #474747'
btnOgThem.style.display = 'none';
btnGirlyThem.style.display = 'block';


}