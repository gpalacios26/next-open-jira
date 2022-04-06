import { FC, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { entriesApi } from '../../apis';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async (description: string) => {
        try {
            const { data } = await entriesApi.post<Entry>('/entries', { description });
            dispatch({ type: 'Entry_Add_Entry', payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    const updateEntry = async ({ _id, description, status }: Entry, showSnackbar = false) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
            dispatch({ type: 'Entry_Entry_Updated', payload: data });

            if (showSnackbar) {
                enqueueSnackbar('Entrada actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: 'Entry_Refresh_Data', payload: data });
    }

    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider value={{
            ...state,
            // Methods
            addNewEntry,
            updateEntry,
        }}>
            {children}
        </EntriesContext.Provider>
    )
};