import { default as mock } from '../../mock/ANALYTICS.json';
import { AnalyticsData, AnalyticsDataItem, IAnalyticsService } from './AnalyticsService.types';

class AnalyticsService implements IAnalyticsService {

    _data: AnalyticsData

    constructor(data: AnalyticsData) {
        this._data = data;
    }

    get data(): any {
        return mock.data;
    }

    getAll(): Array<Array<AnalyticsDataItem>> {
        return [this.getDeals(), this.getTasks()]
    }

    getDeals(): Array<AnalyticsDataItem> {
        return this.data.deals;
    }

    getTasks(): Array<AnalyticsDataItem> {
        return this.data.tasks;
    }
}

export default new AnalyticsService(mock.data);