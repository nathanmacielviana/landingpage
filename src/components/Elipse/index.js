import React from "react";
import styles from './styles.css'

export default function Elipse({size, opacity, styles})
{
    const circleStyle =
    {
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
    }

    return(
       <div className={`circle ${styles}`}></div>
       
    )
}