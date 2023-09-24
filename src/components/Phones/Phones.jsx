
import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';

const Phones = ({ phones }) => {
    // console.log(phones)
    return (
        <div className="py-10">
            <h1 className="text-2xl font-bold text-center"> All Category Phones</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                {
                    phones?.map(phone => <PhoneCard
                        key={phone.id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
        </div>
    );
};
Phones.propTypes = {
    phones: PropTypes.array
}
export default Phones;