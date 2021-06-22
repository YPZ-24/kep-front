import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
    }
}));

export default useStyle;