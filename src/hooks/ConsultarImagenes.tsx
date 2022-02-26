import { useEffect, useState} from 'react';
import axios from 'axios';

const ConsultarImagenes = () => {
    const [images, setImages] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
        try {
            axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => setImages(response.data));
        } catch (error) {
            console.error(error)
        }
    };

    fetchData();
    }, []);

    return {
        images
    };
};

export default ConsultarImagenes;