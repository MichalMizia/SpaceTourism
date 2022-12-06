const mobileNavToggle = document.querySelector('.mobile-nav-toggle')
const openMenuIcon = document.querySelector('[data-open-menu]')
const closeMenuIcon = document.querySelector('[data-close-menu]')
const navList = document.querySelector('[data-menu-list]')

mobileNavToggle.addEventListener('click', ()=>{
    openMenuIcon.classList.toggle('hide')
    closeMenuIcon.classList.toggle('hide')
    navList.classList.toggle('opened')
})

const planets = document.querySelectorAll('.planet')

const planetName = document.querySelector('[data-planet-name]')
const planetText = document.querySelector('[data-planet-text]')
const avgDistance = document.querySelector('[data-avg-distance]')
const estTravelTime = document.querySelector('[data-est-travel]')
const planetImage = document.querySelector('[data-planet-img]')

planets.forEach(planet =>{
    planet.addEventListener('click', ()=>{
        const name = planet.innerText.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())
        getPlanet(name)
        planets.forEach(planet =>{
            planet.classList.remove('active')
        })
        planet.classList.add('active')
    })
})

async function getPlanet(name){
    const res = await fetch('data.json')
    const data = await res.json()
    const planetData = data.destinations.find(destination => destination.name === name)
    planetName.innerText = name.toUpperCase()
    planetText.innerText = planetData.description
    avgDistance.innerText = planetData.distance
    estTravelTime.innerText = planetData.travel
    planetImage.setAttribute('src', planetData.images.png)
    
    planetName.classList.add('animation-class')
    planetText.classList.add('animation-class')
    avgDistance.classList.add('animation-class')
    estTravelTime.classList.add('animation-class')
    planetImage.classList.add('animation-class')
    
    setTimeout(function(){
        planetName.classList.remove('animation-class')
        planetText.classList.remove('animation-class')
        avgDistance.classList.remove('animation-class')
        estTravelTime.classList.remove('animation-class')
        planetImage.classList.remove('animation-class')
    }, 400)
    
}

//crew

const crewBtns = document.querySelectorAll('.crew-button')

const crewName = document.querySelector('[data-name]')
const role = document.querySelector('[data-role]')
const crewText = document.querySelector('[data-crew-text]')
const crewImages = document.querySelectorAll('[data-crew-img]')

crewBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const index = btn.classList[0].charAt(4)
        getCrewMember(index)
        crewBtns.forEach(btn =>{
            btn.classList.remove('active')
        })
        btn.classList.add('active')
    })
})

async function getCrewMember(index){
    const res = await fetch('data.json')
    const data = await res.json()
    const crewData = data.crew[index]

    crewName.innerText = crewData.name
    crewText.innerText = crewData.bio
    role.innerText = crewData.role
    crewImages.forEach(crewImage =>{
        crewImage.setAttribute('src', crewData.images.png)
    })
    
    crewName.classList.add('animation-class')
    crewText.classList.add('animation-class')
    role.classList.add('animation-class')
    crewImages.forEach(crewImage =>{
        crewImage.classList.add('.animation-class')
    })
    
    setTimeout(function(){
        crewName.classList.remove('animation-class')
        crewText.classList.remove('animation-class')
        role.classList.remove('animation-class')
        crewImages.forEach(crewImage =>{
            crewImage.classList.remove('.animation-class')
        })
    }, 400)
    
}

//tech

const techBtns = document.querySelectorAll('.tech-btn')

const techName = document.querySelector('[data-tech-name]')
const techText = document.querySelector('[data-tech-text]')
const techImageMobile = document.querySelector('[data-tech-img-mobile]')
const techImageDesktop = document.querySelector('[data-tech-img-desktop]')

techBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const index = btn.classList[0].charAt(0)
        getTech(index)
        techBtns.forEach(btn =>{
            btn.classList.remove('active')
        })
        btn.classList.add('active')
    })
})

async function getTech(index){
    const res = await fetch('data.json')
    const data = await res.json()
    const techData = data.technology[index]

    techName.innerText = techData.name
    techText.innerText = techData.description
    techImageDesktop.setAttribute('src', techData.images.portrait)
    techImageMobile.setAttribute('src', techData.images.landscape)
    
    techName.classList.add('animation-class')
    techText.classList.add('animation-class')
    techImageDesktop.classList.add('animation-class')
    techImageMobile.classList.add('animation-class')
    
    setTimeout(function(){
        techName.classList.remove('animation-class')
    techText.classList.remove('animation-class')
    techImageDesktop.classList.remove('animation-class')
    techImageMobile.classList.remove('animation-class')
    }, 400)
    
}