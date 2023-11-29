import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Avatar, Grid } from '@mui/material';

const ServiceCard = ({ service, icon: Icon }) => {

    // const { icon: Icon } = service;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                variant="outlined"
                sx={{
                    width: 320,
                    overflow: 'auto',
                    height: 200,
                    resize: 'horizontal',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Avatar size="lg" >
                        <Icon></Icon>
                    </Avatar>
                    
                </Box>
                <CardContent>
                    <Typography level="title-lg">{service.service_name}</Typography>
                    <Typography level="body-sm">
                        {service.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ServiceCard;