import React from 'react';
import { Icon0, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from '../../shared/icons/Icons';

const ICONS: {[key: string]: React.FC} = {
    icon0: Icon0,
    icon1: Icon1,
    icon2: Icon2,
    icon3: Icon3,
    icon4: Icon4,
    icon5: Icon5,
    icon6: Icon6,
    icon7: Icon7,
}

export default function iconConverter(id: string) {
    const iconName = `icon${id}`;
    const icon = ICONS?.[iconName] ;
    if (!icon) {
        return null
    }
    return icon;
}