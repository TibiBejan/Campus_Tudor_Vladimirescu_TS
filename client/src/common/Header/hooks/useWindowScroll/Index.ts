import { useState, useEffect } from 'react';

const useWindowScroll = ():boolean => {
    const [ isScrolled, setIsScrolled ] = useState<boolean>(false);

    useEffect(() => {
        const checkScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return isScrolled;
}

export default useWindowScroll;