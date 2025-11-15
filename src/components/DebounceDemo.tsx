import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
function DebounceSearchDemo(){
    const [searchTerm, setSearchTerm] = useState('');
    const debounceValue = useDebounce(searchTerm);
    return(
        <div>
            <h3>Debounce Search Demo</h3>
            <label>Debounce Delay (ms):</label>
            <input type="number" />
            <br />
            <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <br />
            <div>Current Input:{searchTerm}</div>
            <div>Debounced Value(after 500ms):{debounceValue}</div>
            <div>Simulated Search Results:</div>
            <div>Type to see results.</div>
        </div>
    )
}
export default DebounceSearchDemo;