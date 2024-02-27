import React from 'react'
import styles from './Inputs.module.css'
function Inputs({ label, ...props }) {
  return (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input type='text' {...props} />
    </div>
  )
}

export default Inputs