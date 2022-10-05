import React, {ReactNode} from 'react';
import './Container.styles.css';

type Props = {
    header: ReactNode | null,
    children: ReactNode | null,
}

function Container(props: Props) {
    const { children, header } = props;

    return (
        <div className={'container'}>
            <div className={'container-inner'}>
                <div className={'container-header'}>{ header }</div>
                <div className={'container-content-wrapper'}>{ children }</div>
            </div>
        </div>
    )

}

export default React.memo(Container);
