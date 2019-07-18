import React from 'react';
import styles from "./styles.module.css";

const EventList = (props) => {
    return (
        <div className={styles.eventViewer}>
            {props.data.map(event => {
                return <div className={styles.event}>
                    {event}
                </div>
            })}
        </div>
    )
}

export default EventList
