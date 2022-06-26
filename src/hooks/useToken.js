import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() =>{
        const email = user?.user?.email;
        fetch('https://ancient-citadel-53678.herokuapp.com/login',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data =>{
            if(email){
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
            console.log(data); 
        })

    }, [user]);


    return [token];
}

export default useToken;