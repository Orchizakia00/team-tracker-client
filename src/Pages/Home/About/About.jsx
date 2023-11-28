import { Box, Typography } from "@mui/material";
import SectionTitle from "../../../Components/Shared/SectionTitle";


const About = () => {
    return (
        <Box sx={{marginBottom: '3rem'}}>
            <SectionTitle heading={'About Us'} subHeading={'Our Story'}></SectionTitle>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '100%',
                    textAlign: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                    backgroundColor: '#87C4FF',
                    borderRadius: '5px',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <Box sx={{
                    width: '20rem',
                    borderRadius: '10px',
                    padding: '1.5rem',
                }}>
                    <Typography sx={{ fontWeight: 'bold', margin: '1rem' }}>
                        Innovation |  Collaboration
                    </Typography>
                    <Typography>
                        We uphold a set of values that guide our decisions and actions every day. Innovation fuels our solutions, integrity defines our relationships, and collaboration powers our success.
                    </Typography>
                </Box>
                <Box sx={{
                    width: '20rem',
                    borderRadius: '10px',
                    padding: '1.5rem',
                }}>
                    <Typography sx={{ fontWeight: 'bold', margin: '1rem' }}>
                        Your Success is Our Success
                    </Typography>
                    <Typography>
                        We take pride in our client-centric approach. Every project, every partnership is a unique collaboration, and we are committed to delivering solutions that not only meet but exceed expectations.
                    </Typography>
                </Box>
                <Box sx={{
                    width: '20rem',
                    borderRadius: '10px',
                    padding: '1.5rem',
                }}>
                    <Typography sx={{ fontWeight: 'bold', margin: '1rem' }}>
                        Giving Back to Inspire Growth
                    </Typography>
                    <Typography>
                        Beyond business, we actively engage with our local and global communities. Through initiatives such as [community project or partnership], we strive to make a positive impact and inspire growth.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default About;