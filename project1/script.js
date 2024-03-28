//  const panels=document.querySelectorAll('.panel')
//  // in panels all class panel wil come in the form of array

//  panels.forEach((panel)=>{
//     panel.addEventListener('click',()=>{  
//         removeActiveClasses();
//         panel.classlist.add('active')
//      })
//  })
//  function removeActiveClasses(){
//     panels.forEach((panel)=>{
//         panel.classList.remove('active')
//     })
//  }
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}