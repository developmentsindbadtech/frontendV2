

export const useDPMTabs = () => {
    const tabs = [
    { label: 'DPM (100k)', path: '/dashboard/dpm/100k' },
    { label: 'DPM (Medium-risk)', path: '/dashboard/dpm/medium-risk' },
    { label: 'DPM (High-risk)', path: '/dashboard/dpm/high-risk' },
    { label: 'DPM ELITE(Client 01)', path: '/dashboard/dpm/elite_client_1' },
    { label: 'DPM ELITE(Client 02)', path: '/dashboard/dpm/elite_client_2' },
    { label: 'DPM ELITE(Client 03)', path: '/dashboard/dpm/elite_client_3' },
    { label: 'DPM ELITE(Client 04)', path: '/dashboard/dpm/elite_client_4' },
    { label: 'DPM(Paper Trading)', path: '/dashboard/dpm/paper-trading' },
    ]


    return {tabs}


}