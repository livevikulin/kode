import React from 'react'
import { TabsContainer } from './styles'
import { Departments } from '../../variables'
import _ from 'lodash'

interface ITabs {
    items: string[]
    onSelectedTab: (param: string) => void
    selectedDepartment: string
}

const Tabs = ({ items, onSelectedTab, selectedDepartment }: ITabs) => {
    const departments = ['all', ...items.map((item: any) => item.department)]
    const uniqDepartments = _.uniq(departments).sort()
    const switchDepartment = (item: string) => {
        switch (item) {
            case Departments.ALL:
                return 'Все'
            case Departments.ANDROID:
                return 'Android'
            case Departments.IOS:
                return 'iOS'
            case Departments.DESIGN:
                return 'Дизайн'
            case Departments.MANAGEMENT:
                return 'Менеджмент'
            case Departments.QA:
                return 'QA'
            case Departments.BACK_OFFICE:
                return 'Бэк-Офис'
            case Departments.FRONTEND:
                return 'Frontend'
            case Departments.HR:
                return 'HR'
            case Departments.PR:
                return 'PR'
            case Departments.BACKEND:
                return 'Backend'
            case Departments.SUPPORT:
                return 'Техподдержка'
            case Departments.ANALYTICS:
                return 'Аналитика'
            default:
                return 'Нет такого'
        }
    }

    return (
        <TabsContainer>
            {uniqDepartments.map((department: string) => (
                <li
                    className={
                        department === selectedDepartment ? 'active' : ''
                    }
                    key={department}
                    onClick={() => onSelectedTab(department)}
                >
                    {switchDepartment(department)}
                </li>
            ))}
        </TabsContainer>
    )
}

export default Tabs
