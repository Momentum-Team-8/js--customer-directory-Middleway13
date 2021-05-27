// let x = customers[0]
// let firstName = x.name.first
// let lastName = x.name.last
// let fullName = firstName + " " + lastName
//  

const insertionPoint = document.querySelector('#output')

for (let x of customers) { 
    const profile = document.createElement('div')
    profile.classList.add('profile-card')
    insertionPoint.appendChild(profile)
    console.log(profile)
    const fullName = x.name.first + ' ' + x.name.last
    profile.innerHTML = `<h2>${fullName}</h2>`
}