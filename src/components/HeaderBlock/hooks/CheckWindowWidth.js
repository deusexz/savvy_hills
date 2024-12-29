import {useState, useEffect} from "react";

const useMediaMobile = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 768);



    const isMobileSize = () =>{
        setMobile(window.innerWidth < 768);
    }


    useEffect(() => {
        window.addEventListener("resize", isMobileSize);

        return () => window.removeEventListener("resize", isMobileSize);
    }, []);

    return isMobile;
}

export default useMediaMobile;