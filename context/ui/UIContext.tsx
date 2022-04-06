import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    // Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
    endDragging: () => void;
    startDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);

