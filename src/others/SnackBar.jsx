import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

const SnackBar = ({ message, variant = 'success' }) => {
    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        if (message) {
            enqueueSnackbar(message, { variant });
        }
    }, [message, variant, enqueueSnackbar]);

    return null;
};

export const SnackbarWrapper = ({ children }) => {
    return (
        <SnackbarProvider
            style={{ marginTop: '50px', fontSize: '17px' }}
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            autoHideDuration={3000}
            preventDuplicate
        >
            {children}
        </SnackbarProvider>
    );
};

export default SnackBar;
