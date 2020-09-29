import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    spanOr: {
        fontSize: '15px',
        textAlign: 'center',
        display: 'block',
        position: 'relative',
        zIndex: '0',
        '& span': {
            paddingLeft: '15px',
            paddingRight: '15px',
            backgroundColor: '#5CBD6F',
        },
        "&::after": {
            content: "''",
            width: '100%',
            height: '1px',
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            top: '50%',
            left: '0',
            zIndex: '-1',
        },
    },
});

export default useStyles;