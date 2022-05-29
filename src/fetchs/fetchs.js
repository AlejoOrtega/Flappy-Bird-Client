const URL_BASE = 'http://localhost:9292/'


//GET -----------------------------------------------------
//get all users
export const getAllUsers = () => {
    let infoPack =  fetch(`${URL_BASE}users`)
    .then((res)=> res.json())
    .then((data)=> {
        return data
    })
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

export const patch = (messageId, data) => {
    
    return fetch(`${URL_BASE}memories/${messageId}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({notes: data})
    })
    .then(()=>true)
    .catch(()=>false)
}

export const onDelete = (messageId) => {
    return fetch(`${URL_BASE}memories/${messageId}`,{
        method:'DELETE',
    })
    .then(()=>true)
    .catch(()=>false)
}