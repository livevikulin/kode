import React from 'react'
import { SkeletonElement } from './index'
import './styles.scss'

const SkeletonUser = () => {
    return (
        <div className="skeleton-user">
            <SkeletonElement type="avatar" />
            <div>
                <SkeletonElement type="name" />
                <SkeletonElement type="subtitle" />
            </div>
        </div>
    )
}

export default SkeletonUser
