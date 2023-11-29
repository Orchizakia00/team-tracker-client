import SectionTitle from '../../../Components/Shared/SectionTitle';
import { Grid } from '@mui/material';
import ServiceCard from './ServiceCard';
import { services } from './ServicesData';

const Services = () => {

    return (
        <div className='my-10'>
            <div className='w-full my-10'>
                <img className='w-full h-[600px]' src="https://i.ibb.co/BcsjN88/meeting-managers-office-meeting-businessmen-discussion-by-designers-concept-130951-207.jpg" alt="" />
            </div>
            <SectionTitle heading={'Our Services'} subHeading={'Discover the Solutions We Offer'}></SectionTitle>

            <Grid container spacing={2}>
                {
                    services.map((service) => <ServiceCard key={service._id} service={service} icon={service.icon}></ServiceCard>)
                }
            </Grid>

        </div>
    );
};

export default Services;