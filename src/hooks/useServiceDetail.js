import { useEffect, useState } from "react";

const useServiceDetail = serviceId =>{
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`https://ancient-citadel-53678.herokuapp.com/service/${serviceId}`)
        .then(res =>res.json())
        .then(data => setService(data))
    }, [serviceId]);

    return [service, setService];
}

export default useServiceDetail;