import React, {useState, useRef} from "react";

import './collapsible.css';

function Collapsible(props){

    const [isOpen, setIsOpen] = useState(false);

    const parentRef = useRef();

    return (
        <div className="collapsible">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-": props.label}</button>
            <div className="content-parent" ref={parentRef} style={
                isOpen ? {
                    height: parentRef.current.scrollHeight + "px"
                }:{
                    height: "0px"
                }
            }>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Collapsible;