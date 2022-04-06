import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,
}

export const UIProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI_Open_Sidebar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI_Close_Sidebar' })
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({ type: 'UI_Set_isAddingEntry', payload: isAdding });
    }

    const startDragging = () => {
        dispatch({ type: 'UI_Start_Dragging' });
    }

    const endDragging = () => {
        dispatch({ type: 'UI_End_Dragging' });
    }

    return (
        <UIContext.Provider value={{
            ...state,
            // Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            endDragging,
            startDragging,
        }}>
            {children}
        </UIContext.Provider>
    )
};