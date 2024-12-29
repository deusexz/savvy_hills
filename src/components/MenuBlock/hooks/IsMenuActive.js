import {useState} from 'react';

const useToggledMenu = () => {
    const [menuOpened, setMenuToggled] = useState(false);

    const toggleMenu = () => {
        setMenuToggled(prev => !prev);
        console.log(menuOpened)
    }

    return {menuOpened, toggleMenu};
}

export default useToggledMenu;