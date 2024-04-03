import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(
        () =>{
            window.scrollTo(0,0);
            
        },[pathname]);

    // useEffect(() => {
    //     // Scroll to the top after the page reloads with a slight delay
    //     const delayScroll = () => {
    //         setTimeout(() => {
    //             window.scrollTo(0, 0);
    //         }, 50);
    //     };

    //     // Attach the scroll function to the 'load' event of the window
    //     window.addEventListener("load", delayScroll);

    //     return () => {
    //         window.removeEventListener("load", delayScroll);
    //     };
    // }, []);

    return null;

}