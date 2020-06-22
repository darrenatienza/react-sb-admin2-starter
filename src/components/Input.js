import React, {useState} from 'react'

const useInput = ({type}) => {
    const [value, setValue] = useState("");
    const input = <div className="input-group">
    <input type={type} value={value} onChange={e => setValue(e.target.value)} className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
    <div className="input-group-append">
        <button className="btn btn-primary" type="button">
            <i className="fas fa-search fa-sm"></i>
        </button>
    </div>    
</div>;
    return [value, input];

}

export default useInput
