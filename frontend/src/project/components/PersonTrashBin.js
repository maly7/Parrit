import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

class PersonTrashBin extends React.Component {
    render() {
        const {isOver, connectDropTarget} = this.props;

        const classes = "delete-parrit" + (isOver ? ' drop-target' : '');

        return connectDropTarget(
            <div className={classes}/>
        )
    }
}

PersonTrashBin.propTypes = {
    isOver: PropTypes.bool.isRequired,
    deletePerson: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired
};

const dragSpec = {
    drop(props, monitor) {
        if(monitor.didDrop()) return;

        const person = monitor.getItem();
        props.deletePerson(person.id);
    }
};

const dragCollect = (connect, monitor) => {
    return {
        isOver: monitor.isOver(),
        connectDropTarget: connect.dropTarget()
    };
};

export default DropTarget('Person', dragSpec, dragCollect)(PersonTrashBin);