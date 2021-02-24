import { useState } from 'react';

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    
    const [counter, setCounter] = useState(1);

    function contador(){
        setCounter(counter + 1);
    }

    return (
        <button 
        type="button"
        style={{ backgroundColor: props.color }}
        onClick={contador}
        >
            {props.children} {counter}
        </button>
    );
}