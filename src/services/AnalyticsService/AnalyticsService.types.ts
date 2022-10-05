import { AnalyticsDataTypes } from '../../constants';

export type AnalyticsDataItem = {
    id: string,
    title: string,
    count: string,
    sum?: string,
    symbol?: string,
    type?: AnalyticsDataTypes | string,
    iconCode?: string,
}

export type AnalyticsData = {
    deals?: Array<AnalyticsDataItem>,
    tasks?: Array<AnalyticsDataItem>,
}

export interface IAnalyticsService {
    data(): AnalyticsData,
    getAll(): Array<Array<AnalyticsDataItem>>,
    getDeals(): Array<AnalyticsDataItem>,
    getTasks(): Array<AnalyticsDataItem>,
}