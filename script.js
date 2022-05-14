const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const week = document.querySelector('.week')
const datedisplay = document.querySelector('.date')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const button = document.querySelector('button')
const am = document.querySelector('.am')
const html = document.querySelector('html')



function displayTime(){
const date = new Date()
if(date.getHours()%12 <10){
  hr.innerText=`0${date.getHours()%12}`
}else{
  hr.innerText = date.getHours()%12
}
if(date.getMinutes() <10){
  min.innerText=`0${date.getMinutes()}`
}else{
  min.innerText = date.getMinutes()
}
if(date.getSeconds() <10){
  sec.innerText=`0${date.getSeconds()}`
}else{
 sec.innerText = date.getSeconds()
}

  switch(date.getDay()){
      case 1:
          week.innerText="MON"
          break
          case 2:
          week.innerText="TUE"
          break
          case 3:
          week.innerText="WED"
          break
          case 4:
          week.innerText="THURS"
          break
          case 5:
          week.innerText="FRI"
          break
          case 6:
          week.innerText="SAT"
          break
          case 7:
          week.innerText="SUN"
  }
  datedisplay.innerText = date.getDate()
  month.innerText=date.toLocaleString('default', { month: 'short' })
  year.innerText=date.getFullYear()
  if(date.getHours()>=12 && date.getHours()<24){
    am.innerText='PM'
  }else{
    am.innerText='AM'
  }
}

let darkmode = true

 button.addEventListener('click',()=>{
     if(darkmode){
       const dataTheme = html.getAttribute('data-theme')
       localStorage.setItem("theme", dataTheme);
       (localStorage.theme === 'dark') ? html.setAttribute('data-theme', 'light'): html.setAttribute('data-theme', 'dark');
       button.innerText="DARK MODE"
     darkmode=false
     }else{
      const dataTheme = html.getAttribute('data-theme')
      localStorage.setItem("theme", dataTheme);
      (localStorage.theme === 'light') ? html.setAttribute('data-theme', 'dark'): html.setAttribute('data-theme', 'light');
      button.innerText="LIGHT MODE"
      darkmode=true
     }
 })



setInterval(displayTime,1000)

