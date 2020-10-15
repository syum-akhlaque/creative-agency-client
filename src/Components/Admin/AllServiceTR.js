import React from 'react';

const AllServiceCards = (props) => {
    const {name, serviceName, email, projectDetails } = props.services;
    return (
        <>
             <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>{projectDetails}</td>
                <td>pending</td>
                
            </tr>
        </>
    );
};

export default AllServiceCards;