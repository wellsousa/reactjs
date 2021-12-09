import React, {useState} from "react";

import "./App.css";

import JSONData from "./db/data_base.json";

function App(){
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className="App">
            <input type="text" placeholder="Search..." onChange={ event => {setSearchTerm(event.target.value)} }/>
            
            {
                JSONData.filter( (val) => {
                            if ( searchTerm == ""){
                                console.log(val)
                                return val
                            }else if(val.first_name.includes(searchTerm.toLocaleLowerCase())){
                                return val
                            }
                        })
                        .map( (val, key) => {
                    return (
                        <div className="user" key={key}>
                            <p>{key}-{val.first_name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default App;