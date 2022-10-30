const dropdown1=document.getElementById('list1')
const dropdown2=document.getElementById('list2');
const features=document.getElementById('features');
const company=document.getElementById('company');
const openmenu=document.querySelector('.opennavbar');
const closemenu=document.querySelector('.cross');
const navbar=document.getElementById('navigationbar');
const darkeffect=document.getElementById('darkthemeback');
features.addEventListener('click',()=>{
if(dropdown1.style.display=="none"){
    dropdown1.style.display="block";
}
else{
    dropdown1.style.display="none";
}
})
company.addEventListener('click',()=>{   
    if(dropdown2.style.display=="none"){
        dropdown2.style.display="block";
    }
    else{
        dropdown2.style.display="none";
    }
})
openmenu.addEventListener('click',()=>{
    navbar.style.display="block";
darkeffect.style.display="block";
})
closemenu.addEventListener('click',()=>{
    navbar.style.display="none";
darkeffect.style.display="none";
})