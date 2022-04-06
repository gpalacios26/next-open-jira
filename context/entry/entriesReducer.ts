import { EntriesState } from './';
import { Entry } from '../../interfaces';

type EntriesActionType =
    | { type: 'Entry_Add_Entry', payload: Entry }
    | { type: 'Entry_Entry_Updated', payload: Entry }
    | { type: 'Entry_Refresh_Data', payload: Entry[] }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case 'Entry_Add_Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }

        case 'Entry_Entry_Updated':
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }

        case 'Entry_Refresh_Data':
            return {
                ...state,
                entries: [...action.payload]
            }

        default:
            return state;
    }

}