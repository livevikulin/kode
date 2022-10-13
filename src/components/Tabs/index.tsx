import React, { useMemo } from 'react'
import { IUser } from '../../types'
import { TabsContainer } from './styles'
import { getCategoryName } from '../../variables'
import uniq from 'lodash/uniq'

interface ITabs {
    items: any
    onSelectedTab: (param: string) => void
    selectedDepartment: string
}

const Tabs = ({ items, onSelectedTab, selectedDepartment }: ITabs) => {
    const departments = useMemo(
        () =>
            uniq([
                'all',
                ...items.map((item: IUser) => item.department),
            ]).sort(),
        [items]
    )

    return (
        <TabsContainer>
            {departments.map((department: string) => (
                <li
                    className={
                        department === selectedDepartment ? 'active' : ''
                    }
                    key={department}
                    onClick={() => onSelectedTab(department)}
                >
                    {getCategoryName(department)}
                </li>
            ))}
        </TabsContainer>
    )
}

export default Tabs
