var root = document.getElementById('main');

var div1 = document.createElement('div');
div1.classList.add("card");
root.appendChild(div1);

var image1 = document.createElement('img');
image1.src = "images/download.png";
div1.appendChild(image1);

var heading1 = document.createElement('h2');
heading1.textContent = "Krishna";
div1.appendChild(heading1);

var para1= document.createElement('p');
para1.textContent="Trainee";
div1.appendChild(para1);

var line= document.createElement('hr');
div1.appendChild(line);

var phone= document.createElement('p');
phone.textContent="+91 7981305480";
div1.appendChild(phone);

var mail= document.createElement('p');
mail.textContent="krishna.koppera@gmail.com";
div1.appendChild(mail);

var address = document.createElement('p');
address.textContent = "Nuzvid";
div1.appendChild(address);

var div2=document.createElement('div');
div2.classList.add("resume");
root.appendChild(div2);

var heading2=document.createElement('h3');
heading2.textContent="Carrier Objective";
div2.appendChild(heading2);

var para2=document.createElement('p');
para2.textContent="My objective is to work in a professional atmosphere which would utilize my knowledge and skills and provide myself the scope for widening the spectrum of my knowledge and to secure the position that gives professional satisfaction."
div2.appendChild(para2);

var line1= document.createElement('hr');
div2.appendChild(line1);

var heading3=document.createElement('h3');
heading3.textContent="Educational Profile";
div2.appendChild(heading3);

var tab=document.createElement('table');
tab.border="1";
tab.cellPadding="0";
tab.cellSpacing="0";
div2.appendChild(tab);

var tr1 = document.createElement('tr');
tab.appendChild(tr1);

var th1 = document.createElement('th');
th1.textContent="S.no";
var th2 = document.createElement('th');
th2.textContent="Graduation";
var th3 = document.createElement('th');
th3.textContent="Institution";
var th4 = document.createElement('th');
th4.textContent="Board";
var th5 = document.createElement('th');
th5.textContent="Percentage";
var th6 = document.createElement('th');
th6.textContent="Year of passing";
tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
tr1.appendChild(th5);
tr1.appendChild(th6);

var tr2 = document.createElement('tr');
tab.appendChild(tr2);

var td1 = document.createElement('td');
td1.textContent="1";
var td2 = document.createElement('td');
td2.textContent="S.S.C";
var td3 = document.createElement('td');
td3.textContent="Thrividha High School";
var td4 = document.createElement('td');
td4.textContent="Board of Secondary Education";
var td5 = document.createElement('td');
td5.textContent="93";
var td6 = document.createElement('td');
td6.textContent="2015";
tr2.appendChild(td1);
tr2.appendChild(td2);
tr2.appendChild(td3);
tr2.appendChild(td4);
tr2.appendChild(td5);
tr2.appendChild(td6);

var tr3 = document.createElement('tr');
tab.appendChild(tr3);

var td1 = document.createElement('td');
td1.textContent="2";
var td2 = document.createElement('td');
td2.textContent="Intermediate";
var td3 = document.createElement('td');
td3.textContent="Sri Gayathri Junior College";
var td4 = document.createElement('td');
td4.textContent="Board of Intermediate";
var td5 = document.createElement('td');
td5.textContent="89";
var td6 = document.createElement('td');
td6.textContent="2017";
tr3.appendChild(td1);
tr3.appendChild(td2);
tr3.appendChild(td3);
tr3.appendChild(td4);
tr3.appendChild(td5);
tr3.appendChild(td6);

var tr3 = document.createElement('tr');
tab.appendChild(tr3);

var td1 = document.createElement('td');
td1.textContent="3";
var td2 = document.createElement('td');
td2.textContent="B.Tech";
var td3 = document.createElement('td');
td3.textContent="Godavari Institute of Engineering and Technology";
var td4 = document.createElement('td');
td4.textContent="JNTUK";
var td5 = document.createElement('td');
td5.textContent="80";
var td6 = document.createElement('td');
td6.textContent="2021";
tr3.appendChild(td1);
tr3.appendChild(td2);
tr3.appendChild(td3);
tr3.appendChild(td4);
tr3.appendChild(td5);
tr3.appendChild(td6);

var skills=document.createElement('h3');
skills.textContent="Skills";
div2.appendChild(skills);

var ul=document.createElement('ul');
ul.type="disc";
div2.appendChild(ul);

var li1=document.createElement('li');
li1.textContent="Java";
ul.appendChild(li1);

var li2=document.createElement('li');
li2.textContent="Html";
ul.appendChild(li2);

var li3=document.createElement('li');
li3.textContent="Python";
ul.appendChild(li3);

var li4=document.createElement('li');
li4.textContent="CSS";
ul.appendChild(li4);

var hob=document.createElement('h3');
hob.textContent="Hobbies";
div2.appendChild(hob);

var ul1=document.createElement('ul');
ul1.type="squares";
div2.appendChild(ul1);

var li5=document.createElement('li');
li5.textContent="Playing Cricket";
ul1.appendChild(li5);

var li6=document.createElement('li');
li6.textContent="Listening to Music";
ul1.appendChild(li6);

var int=document.createElement('h3');
int.textContent="Interests";
div2.appendChild(int);

var ul2=document.createElement('ul');
ul2.type="squares";
div2.appendChild(ul2);

var li7=document.createElement('li');
li7.textContent="Coding";
ul2.appendChild(li7);

var li8=document.createElement('li');
li8.textContent="Testing";
ul2.appendChild(li8);