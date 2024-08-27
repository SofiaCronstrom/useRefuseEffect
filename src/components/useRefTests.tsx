import { useRef } from "react";

export default function UseReferece () {
    
    ////UseRef to create an input reference and apply focus();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onButtonClick = () => {
      inputRef.current?.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={onButtonClick}>Focus</button>
        </div>
    );
    }