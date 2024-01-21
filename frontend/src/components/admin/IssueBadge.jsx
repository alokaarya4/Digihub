import React, { useEffect, useState } from 'react'

const IssueBadge = ({ studentData }) => {

    const [badgeList, setBadgeList] = useState([]);
    const [issuedBadges, setIssuedBadges] = useState([]);

    const fetchBadgeData = async () => {
        const res = await fetch('http://localhost:5000/badge/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setBadgeList(data);
        }
    };

    const fetchIssuebadges = async () => {
        const res = await fetch('http://localhost:5000/issue/getbystudent/' + studentData._id);
        const data = await res.json();
        setIssuedBadges(data);
        console.log(data);
    }

    const issueBadge = async (badgeId) => {
        const res = await fetch('http://localhost:5000/issue/add', {
            method: 'POST',
            body: JSON.stringify({
                badge: badgeId,
                student: studentData._id,
                issueDate: new Date()
            }),
            headers: {
                'Content-Type': 'application/json'

            }
        });

        console.log(res.status);

        // alert on success
    }

    useEffect(() => {
        fetchBadgeData();
        fetchIssuebadges();
    }, []);

    const displayBadges = () => {
        return badgeList.map((badge) => (

            <div className="border border-gray-500">
                <img className='card-img-top' src={"http://localhost:5000/" + badge.image} alt="" />
                <div className="card-body">
                    <button onClick={() => { issueBadge(badge._id) }}>Issue badge</button>
                </div>
            </div>
        ))
    }

    const displayIssuedBadges = () => {
        return issuedBadges.map((badge) => (

            <div className="border border-gray-500">
                <img className='card-img-top' src={"http://localhost:5000/" + badge.image} alt="" />
                <div className="card-body">
                    <button onClick={() => { issueBadge(badge._id) }}>Issue Badge</button>
                </div>
            </div>
        ))
    }

    return (
        <div className='p-5'>
            <h2 className='text-center text-2xl font-bold'>Issue Badge to {studentData.fullName}</h2>
            <hr />
            <h4 className='mt-4'>Available Badges</h4>
            <div className='grid grid-cols-6 gap-5'>

                {displayBadges()}
            </div>
            <h4 className='mt-4'>Issued Badges</h4>
            <div className='grid grid-cols-6 gap-5'>

                {displayIssuedBadges()}
            </div>
        </div>
    )
}

export default IssueBadge;