import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
    
    const[menu, setMenu] = useState({});

    const fetchMenu = async () => {
        const res = await axios.get('http://localhost:5067/api/pedido');
        setMenu(res.data);
    };

    useEffect(()=>{
        fetchMenu();
    },[]);

    const renderedMenu = Object.values(menu).map(m =>{
        return <div className='card' 
                    style={{width: '30%', marginBottom: '20px'}}
                    key={m.id}
                >
                    <div className='card-body'>
                        <h2>{m.descripcionPedido}</h2>
                        <h2>{m.cantidad}</h2>
                    </div>
                </div>                
    }); 
        
    return <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedMenu}
    </div>;
};


