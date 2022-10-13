import React, { useEffect, useState } from 'react'
import Search from '../Search'
import StatusBar from '../StatusBar'
import Tabs from '../Tabs'

const TopAppBar = ({
    connection,
    title,
    items,
    onSelectedTab,
    selectedDepartment,
    searchQuery,
    handleSearchChange,
}: any) => {
    const [isConnect, setIsConnect] = useState(true)

    useEffect(() => {
        connection
            ? setIsConnect(false)
            : setTimeout(() => {
                  setIsConnect(true)
              }, 1500)
    }, [connection])

    return (
        <div>
            {isConnect ? (
                <div>
                    <h1>{title}</h1>
                    <Search
                        value={searchQuery}
                        handleChange={handleSearchChange}
                    />
                </div>
            ) : (
                <StatusBar status={connection} />
            )}
            <Tabs
                items={items}
                onSelectedTab={onSelectedTab}
                selectedDepartment={selectedDepartment}
            />
        </div>
    )
}

export default TopAppBar
