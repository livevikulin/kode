import React from 'react'
import './styles.scss'

interface ISkeleton {
    type: string
}

const SkeletonElement = ({ type }: ISkeleton) => {
    const classes = `skeleton ${type}`

    return <div className={classes}></div>
}

export default SkeletonElement
