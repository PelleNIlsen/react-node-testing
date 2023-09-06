import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
    const [memberships, setMemberships] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/memberships')
            .then(res => res.json())
            .then(data => setMemberships(data));
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {memberships.map((m, index) => (
                <Card
                    key={index}
                    user_id={m.user_id}
                    first_name={m.first_name}
                    last_name={m.last_name}
                    start_date={m.start_date}
                    end_date={m.end_date}
                    type={m.membership_type}
                    status={m.payment_status}
                />
            ))}
        </div>
    );
}

export default App;
