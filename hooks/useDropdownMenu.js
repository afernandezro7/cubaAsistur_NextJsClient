import { useEffect, useState } from "react";


export const useDropdownMenu = () => {

    const [isDropdown, setIsDropdown] = useState(false);

    const [menuState, setMenuState] = useState({
        buttonClass: 'collapsed', // [transition-->'', true-->'toggled']
        navBarDiv: 'collapse'    //  [transition-->'collapsing', true-->'collapse show']
    });
    const { buttonClass, navBarDiv } = menuState;

    useEffect(() => {
        
        if(isDropdown){
            setMenuState({ buttonClass: '', navBarDiv: 'collapsing' } )
            setTimeout(() => {               
                setMenuState({ buttonClass: 'toggled', navBarDiv: 'collapse show' } )
            }, 100);
        }else{
            setMenuState({ buttonClass: 'collapsed', navBarDiv: 'collapse' } )
        }

    }, [isDropdown])


    return {
        isDropdown,
        setIsDropdown,
        buttonClass,
        navBarDiv
    }
    
}
