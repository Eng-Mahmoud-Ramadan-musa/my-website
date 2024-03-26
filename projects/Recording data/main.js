let uName = document.querySelector('.name');
let uNameRg = /\w{3,}/i;
let tUserNameRg = uNameRg.test(uName);
let uEmail = document.querySelector('.email');
let uPhone = document.querySelector('.phone');
let fPhone = document.querySelector('.fPhone');
let year = document.querySelector('#year');
let subject = document.querySelector('#subject');
let add = document.querySelector('.add');
let tBody = document.querySelector('.tbody');
let mode = 'create';
let t;
//************* 
let dataBase;
if (localStorage.dataUser) {
    dataBase = JSON.parse(localStorage.dataUser)
}else{
dataBase = [];
}
add.onclick = () => {    
    if (uName.value != '' && uEmail.value != '' && uPhone.value != '' && fPhone.value != '' && year.value !='' && subject.value != '' ) {
        dataUser(uName,uEmail,uPhone,fPhone,year,subject)
        localStorage.setItem('dataUser',  JSON.stringify(dataBase) )
        addScreen()
        clearData()
    }
}
function clearData() {
    uName.value = '';  
    uEmail.value = '';
    uPhone.value = '' ; 
    fPhone.value = '';
    year.value = '';
    subject.value = '';
}
clearData()
function dataUser(name,email,phone,fatherP,year,subject) {
    const data ={
        userName: name.value,
        userEmail: email.value,
        userPhone: phone.value,
        fatherPhone: fatherP.value,
        year: year.value,
        subject: subject.value,
    }
    if (mode === 'create'){
         dataBase.push(data);
    }else{
        dataBase[t] = data;
        mode = 'create'
        add.value = 'انشاء'
        add.style.cssText ='background: #f00'
    }   
}
function addScreen() {
   let tbody = '';
   for (let i = 0; i < dataBase.length; i++ ){
    tbody += `
    <tr>
        <td>${i+1}</td>
        <td>${dataBase[i].userName}</td>
        <td>${dataBase[i].userEmail}</td>
        <td>${dataBase[i].userPhone}</td>
        <td>${dataBase[i].fatherPhone}</td>
        <td>${dataBase[i].year}</td>
        <td>${dataBase[i].subject}</td>
        <td ><button onclick='updateData(${i})' class='up' style="--i:#0f0;--m:#a9df9e;">تحديث</button></td>
        <td><button onclick='del(${i})' class='del' style="--i:#f00;--m:#ee9c9c;">حذف</button></td>
    </tr>`
    tBody.innerHTML = tbody;
   }
}
function del(i) {
    dataBase.splice(i,1);
    localStorage.dataUser = JSON.stringify(dataBase);
    addScreen(); 
}
addScreen()
function updateData(i) {
    uName.value = dataBase[i].userName;  
    uEmail.value = dataBase[i].userEmail;
    uPhone.value = dataBase[i].userPhone;
    fPhone.value = dataBase[i].fatherPhone;
    year.value = dataBase[i].year;
    subject.value = dataBase[i].subject;
    add.value = 'تحديث';
    add.style.cssText = 'background: #0f0';
    mode = 'update';
    t = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
}
let conSearch = document.querySelector('#conSearch');
let seaechMood = 'name';
function addBlockSearch(id){
    if (id === '1'){
        seaechMood = 'name';
        conSearch.innerHTML=`<input type="search" id="textSearch" onkeyup="searchData(this.value)">`
        textSearch.focus();
        textSearch.placeholder = 'بحث بالاسم';
    }
    else if (id === '2'){
        seaechMood = 'subject';
        conSearch.innerHTML=`  <select name="subject" onclick="searchData(this.value)">
        <option value="جيولوجيا" name='' > جيولوجيا</option><hr>
        <option value="أحياء" name=''>أحياء</option><hr>
        <option value="ج&أ" name=''>جيولوجيا و أحياء</option>
        </select>`
    }else{
        seaechMood = 'year';
        conSearch.innerHTML=` <select name="year" onclick="searchData(this.value)" >
        <option value="الاولي" name=''>الاولي</option><hr>
        <option value="الثانية" name=''>الثانية</option><hr>
        <option value="الثالثة" name=''>الثالثة</option>
        </select>`
    }
    addScreen() 
}
function searchData(value) {
    let tbody = '';
    for (let i = 0; i < dataBase.length; i++ ) {
    if (seaechMood === 'name') {
            if (dataBase[i].userName.includes(value)){
                 tbody += `
                 <tr>
                     <td>${i+1}</td>
                     <td>${dataBase[i].userName}</td>
                     <td>${dataBase[i].userEmail}</td>
                     <td>${dataBase[i].userPhone}</td>
                     <td>${dataBase[i].fatherPhone}</td>
                     <td>${dataBase[i].year}</td>
                     <td>${dataBase[i].subject}</td>
                     <td ><button onclick='updateData(${i})' class='up' style="--i:#0f0;--m:#a9df9e;">تحديث</button></td>
                     <td><button onclick='del(${i})' class='del' style="--i:#f00;--m:#ee9c9c;">حذف</button></td>
                     </tr>`
            }
    }else if(seaechMood === 'subject') {
            if (dataBase[i].subject.includes(value)){
                 tbody += `
                 <tr>
                     <td>${i+1}</td>
                     <td>${dataBase[i].userName}</td>
                     <td>${dataBase[i].userEmail}</td>
                     <td>${dataBase[i].userPhone}</td>
                     <td>${dataBase[i].fatherPhone}</td>
                     <td>${dataBase[i].year}</td>
                     <td>${dataBase[i].subject}</td>
                     <td ><button onclick='updateData(${i})' class='up' style="--i:#0f0;--m:#a9df9e;">تحديث</button></td>
                     <td><button onclick='del(${i})' class='del' style="--i:#f00;--m:#ee9c9c;">حذف</button></td>
                     </tr>`   
            }
    }
    else{
            if (dataBase[i].year.includes(value)){
                 tbody += `
                 <tr>
                     <td>${i+1}</td>
                     <td>${dataBase[i].userName}</td>
                     <td>${dataBase[i].userEmail}</td>
                     <td>${dataBase[i].userPhone}</td>
                     <td>${dataBase[i].fatherPhone}</td>
                     <td>${dataBase[i].year}</td>
                     <td>${dataBase[i].subject}</td>
                     <td ><button onclick='updateData(${i})' class='up' style="--i:#0f0;--m:#a9df9e;">تحديث</button></td>
                     <td><button onclick='del(${i})' class='del' style="--i:#f00;--m:#ee9c9c;">حذف</button></td>
                     </tr>`
            }
    }}
    tBody.innerHTML = tbody;
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
window.print(tBody)
})