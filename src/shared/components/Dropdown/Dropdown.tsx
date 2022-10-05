import React, {Ref} from 'react';
import { DropdownOption } from './Dropdown.types';
import './Dropdown.styles.css';

type Props = {
    options: Array<DropdownOption>
}

function Dropdown(props: Props): JSX.Element {
    const { options } = props;
    const [open, setOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const handleClick = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const addClickAwayListener = (event: MouseEvent) => {
        !dropdownRef.current?.contains(event.target as Node) && handleClose();
    }

    React.useEffect(() => {
        document.addEventListener('click', addClickAwayListener);
        return () => document.removeEventListener('click', addClickAwayListener);
    }, []);

    const renderButton = ({ className = '', label = '', dataAttr = '' }: { [key: string]: string }) => (
        <button onClick={handleClick} className={className} data-isOpen={dataAttr}>{ label }</button>
    );

    return (
        <div className={'dropdown-root'} ref={dropdownRef}>
            { renderButton({ className: 'dropdown-button', label: options[0]?.label, dataAttr: `${open}` }) }
            { open && (
                <div className={'dropdown-popup'}>
                    { options.slice(1).map(({ label }) => renderButton({ className: 'dropdown-item', label })) }
                </div>
            ) }
        </div>
    );
}

export default React.memo(Dropdown);