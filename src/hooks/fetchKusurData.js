import { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_API_URL, AUTH_KEY } from '../config/index'
const yourConfig = {
    headers: {
        Authorization: "Bearer " + AUTH_KEY
    }
}

export const useFetchKusurData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            axios.get(REACT_APP_API_URL, yourConfig)
                .then((res) => {
                    console.log(res.data)
                    setData(res.data.payload)
                })

        } catch (e) {
            setError(true);
        }
        setLoading(false);
    }

    //Initial render
    useEffect(() => {
        fetchData()
    }, []);

    return { data, loading, error };
};