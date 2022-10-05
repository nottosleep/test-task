import React from 'react';
import { MenuItem } from './Menu.types';
import './Menu.styles.css';

type Props = {
    items: Array<MenuItem>
}

function Menu(props: Props) {
    const { items } = props;
    const [ selectedIndex, setSelectedIndex ] = React.useState(0);

    return (
        <div className={'menu'}>
            { items.map((item: MenuItem, idx: number) => {
                const cssClasses = `menu-item ${idx === selectedIndex ? 'menu-item-active' : ''}`;
                return <span key={item?.id} className={cssClasses} onClick={() => setSelectedIndex(idx)}>{ item?.label }</span>
            })}
        </div>
    )
}

export default React.memo(Menu);