const URL_BASE = 'http://localhost:9292/'


//GET -----------------------------------------------------
//get user scores
export const getUserScores = (id) => {
    let infoPack =  fetch(`${URL_BASE}users/${id}/scores`)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch(() =>false)

    return infoPack
}
export const getBestScores = () => {
    let infoPack =  fetch(`${URL_BASE}scores`)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch(() =>false)

    return infoPack
}

//POST ----------------------------------------------
//post response login
export const postLoginResponse = (body) => {
    let infoPack = fetch(`${URL_BASE}users/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .then((data)=>data)
    .catch((err)=>console.log(err))

    return infoPack
}
//post register new user
export const postCreateNewUser = (body) => {
    return fetch(`${URL_BASE}users`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .then(data => data)
    .catch(()=>false)
}
//post new score
export const postNewScore = (userId, score) => {
    console.log('Im called')
    return fetch(`${URL_BASE}score`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: userId, score: score})
        })
        .then(res=>res.json())
        .then(data => data)
        .catch(()=>false)
}

//PATCH -------------------------------------------
//patch username
export const patchUserName = (id, newUserName) => {
    
    return fetch(`${URL_BASE}users/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: newUserName})
    })
    .then(()=>true)
    .catch(()=>false)
}
//DELETE ---------------------------------------------
//delete user
export const deleteUser = (id) => {
    return fetch(`${URL_BASE}users/${id}`,{
        method:'DELETE',
    })
    .then(()=>true)
    .catch(()=>false)
}