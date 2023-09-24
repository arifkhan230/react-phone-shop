
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardPhone from "./CardPhone";

const Phone = () => {
    const [phone, setPhone] = useState()

    const { id } = useParams();
    const phones = useLoaderData()

    useEffect(() => {
        const findPhone = phones.find(phone => phone.id === id)
        console.log(findPhone)
        setPhone(findPhone)
    }, [id, phones])

    return (
        <div>
           <CardPhone phone={phone}></CardPhone>
        </div>
    );
};

Phone.propTypes = {

};

export default Phone;