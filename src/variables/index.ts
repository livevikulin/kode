export const departmentsDictionary = {
    all: 'Все',
    android: 'Андройд',
    ios: 'iOS',
    design: 'Дизайн',
    management: 'Менеджмент',
    qa: 'QA',
    back_office: 'Бэк-Офис',
    frontend: 'Frontend',
    hr: 'HR',
    pr: 'PR',
    backend: 'Backend',
    support: 'Техподдержка',
    analytics: 'Аналитика',
}

export const getCategoryName = (categoryKey: string) => {
    if (!categoryKey) return 'unnamed'
    // @ts-ignore
    return departmentsDictionary[categoryKey] || categoryKey
}
