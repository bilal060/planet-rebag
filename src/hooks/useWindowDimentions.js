import { useState, useEffect } from 'react';
import { getWindowDimensions } from '../helpers/getWindowDimentions';

const useWindowDimensions = () => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { width } = windowDimensions;
    return width < 992 ? true : false;
};

export default useWindowDimensions;