import React from 'react';
import { Container } from '../../shared/components/Container';
import { Menu } from '../../shared/components/Menu';
import { Dropdown } from '../../shared/components/Dropdown';
import { SimpleCard } from '../../shared/components/SimpleCard';
import { AnalyticsDataItem } from '../../services/AnalyticsService/AnalyticsService.types';
import { AnalyticsDataTypes } from '../../constants/AnalyticsDataTypes';
import './Analytics.styles.css';

type Props = {
    data: Array<Array<AnalyticsDataItem>>,
}

function Analytics(props: Props) {
    const { data } = props;

    if (!data?.length) {
        return null
    }

    const createItem = (item: string) => ({ id: item, label: item });

    const renderHeader = () => {
        const menuItems = ['Month', 'Week', 'Yesterday', 'Today'].map(createItem);
        const dropdownOptions = ['All Pipelines', 'Sales', 'Marketing', 'Partners'].map(createItem);

        return (
            <div className={'analytics-page-header'}>
                <Dropdown options={dropdownOptions}/>
                <Menu items={menuItems} />
            </div>
        )
    }

    const renderCard = (item: AnalyticsDataItem) => {
        const { id, title, iconCode = '', type = AnalyticsDataTypes.info, sum, symbol, count } = item;
        const separator = sum ? ' | ' : '';
        const subtitle = {
            value: `${count}${sum ? separator + sum + ' ' + symbol : ''}`,
            separator,
        };

        return <SimpleCard key={id} title={title} icon={iconCode} variant={type as AnalyticsDataTypes} subtitle={subtitle} />
    }

    return (
        <div className={'analytics-page'}>
            <Container header={renderHeader()}>
                <div>
                    { data.map((array: Array<AnalyticsDataItem>, i: number) => (
                        <div key={i} className={'analytics-page-row'}>{ array.map(renderCard)}</div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default React.memo(Analytics);
