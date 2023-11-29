import { Button, Grid } from '@mui/material';
import ServiceCard from './ServiceCard';
import { services } from './ServicesData';
import SectionTitle from '../../../Components/Shared/SectionTitle';
import { Link } from 'react-router-dom';

const FilteredServices = () => {

    console.log(services);
    const filteredServices = services.filter(service => service._id >= 1 && service._id <= 6);
    console.log(filteredServices);

    return (
        <div>
            <SectionTitle heading={'Services'} subHeading={'Uncover a Range of Solutions'}></SectionTitle>
            <Grid container spacing={2}>
                {
                    filteredServices.map((service) => <ServiceCard key={service._id} service={service} icon={service.icon}></ServiceCard>)
                }
            </Grid>
            {/* <Button sx={{marginBottom: '3rem', marginTop: '2rem', textTransform: 'none'}} variant="contained">See all</Button>
             */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to={'/services'}>
                    <Button sx={{ marginBottom: '3rem', marginTop: '2rem', textTransform: 'none' }} variant="contained">
                        See all
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default FilteredServices;