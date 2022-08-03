// eslint-disable-next-line
import { useSelector, connect } from 'react-redux';

const Notification = (props) => {
    // const notification = useSelector((state) => state.notification);
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
    };
    if (props.notification === '') {
        return null;
    }
    return <div style={style}>{props.notification}</div>;
};

const mapStateToProps = (state) => {
    return {
        notification: state.notification,
    };
};

// export default Notification;

export default connect(mapStateToProps)(Notification);
