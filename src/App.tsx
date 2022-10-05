import React from 'react';
import Analytics from './modules/Analytics/Analytics';
import { AnalyticsService } from './services/AnalyticsService';
import { AnalyticsDataItem } from './services/AnalyticsService/AnalyticsService.types';
import './App.css';

function App() {
    const [analyticsData, setAnalyticsData] = React.useState([] as Array<Array<AnalyticsDataItem>>);

    React.useEffect(() => {
        const data = AnalyticsService.getAll();
        setAnalyticsData(data);
    }, [])

    return <Analytics data={analyticsData} />
}

export default App;
