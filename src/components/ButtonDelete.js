import React from 'react'
import {useSnackbar} from 'notistack'
import { IconButton, Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

function ButtonDelete({handlerAccept}) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function handlerDelete(){
        enqueueSnackbar("Seguro? ", {
            variant: "error",
            action: (key) => (
                <>
                    <Button onClick={()=>{
                        closeSnackbar(key)
                        handlerAccept()
                    }}>
                        SI
                    </Button>
                    <Button onClick={() => { closeSnackbar(key) }}>
                        NO
                    </Button>
                </>
            )
        });
    }

    return (
        <IconButton size="small" onClick={handlerDelete}>
            <Delete/>
        </IconButton>
    )
}

export default ButtonDelete
