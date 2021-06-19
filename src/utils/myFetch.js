const URL = 'http://localhost:8000/api'

function getToken(){
    let token = sessionStorage.getItem('token');
    if(token) return token;
    else return '';
}

async function MyFetch({method, path, body}){
    try{
        const res = await fetch(URL+path, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': getToken()
        }
        });
        return await res.json();
    }catch(e){
        e.message = "Sorry, something went wrong!"
        return e
    }
}

export default MyFetch;