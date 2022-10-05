import React from 'react';
import { AnalyticsDataTypes } from '../../../constants/AnalyticsDataTypes';
import { iconConverter } from '../../../utils/iconConverter';
import './SimpleCard.styles.css';

type Props = {
    title: string,
    subtitle: {
        value: string,
        separator?: string,
    },
    icon: string,
    variant: AnalyticsDataTypes,
}

function SimpleCard(props: Props) {
    const { title, subtitle, icon, variant = AnalyticsDataTypes.success } = props;
    const textClass = `simple-card-texts`;
    const titleClass = `simple-card-title`;
    const titleVariantClass = `simple-card-${variant}-title`;
    const Icon = iconConverter(icon);

    const renderSubtitle = React.useCallback(() => {
        const { separator, value } = subtitle;
        const subtitleClass = `simple-card-subtitle ${textClass}`;

        if (!separator) {
            return <span className={subtitleClass}><b>{value}</b></span>
        }
        const parsedSubtitle = subtitle?.value.split(separator);
        const subtitleLeftValue = parsedSubtitle?.[0] || '';
        const subtitleRightValue = parsedSubtitle?.[1] || '';

        return (
            <span>
                <span className={subtitleClass}>
                    <b>{subtitleLeftValue}<span className={'simple-card-subtitle-separator'}>{separator}</span></b>
                </span>
                <span className={subtitleClass}>{subtitleRightValue}</span>
            </span>
        )
    }, [subtitle, textClass]);

    return (
        <div className={'simple-card'}>
            { Icon && <div className={`simple-card-avatar`}><Icon/></div> }
            <div className={'simple-card-texts-wrapper'}>
                <span className={`${textClass} ${titleClass} ${titleVariantClass}`}>{title}</span>
                { renderSubtitle() }
            </div>
        </div>
    )
}

export default React.memo(SimpleCard);
