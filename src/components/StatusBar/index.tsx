import React from 'react'
import OfflineBar from './OfflineBar'
import OnlineBar from './OnlineBar'

const StatusBar = ({ status }: any) => {
    return status ? <OfflineBar /> : <OnlineBar />
}

export default StatusBar
