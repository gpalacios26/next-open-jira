import { UIState } from './';

type UIActionType =
    | { type: 'UI_Open_Sidebar' }
    | { type: 'UI_Close_Sidebar' }
    | { type: 'UI_Set_isAddingEntry', payload: boolean }
    | { type: 'UI_Start_Dragging' }
    | { type: 'UI_End_Dragging' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI_Open_Sidebar':
            return {
                ...state,
                sidemenuOpen: true,
            }

        case 'UI_Close_Sidebar':
            return {
                ...state,
                sidemenuOpen: false,
            }

        case 'UI_Set_isAddingEntry':
            return {
                ...state,
                isAddingEntry: action.payload
            }

        case 'UI_Start_Dragging':
            return {
                ...state,
                isDragging: true
            }

        case 'UI_End_Dragging':
            return {
                ...state,
                isDragging: false
            }

        default:
            return state;
    }

}