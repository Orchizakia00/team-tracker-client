import { Box, Button, Container, TextField } from '@mui/material';
import SectionTitle from '../../Components/Shared/SectionTitle';

const ContactUs = () => {
    return (
        <>
            <SectionTitle heading={'Contact Us'} subHeading={'Send Your Valuable Feedback'}></SectionTitle>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
                minHeight: '100vh'
            }}>

                <Box component={'form'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        // marginTop: '2rem',
                        maxWidth: '30rem',
                        width: '100%',
                        border: '1px solid gray',
                        borderRadius: '1rem',
                        padding: '2rem'
                    }}
                >
                    <TextField
                        label="Name"
                        name='name'
                        fullWidth
                        required
                        sx={{ marginBottom: '1rem' }}
                        inputProps={{ style: { color: 'black' } }}
                        InputLabelProps={{ style: { color: 'black' } }}
                    />
                    <TextField
                        label="Email"
                        name='email'
                        fullWidth
                        required
                        sx={{ marginBottom: '1rem' }}
                        inputProps={{ style: { color: 'black' } }}
                        InputLabelProps={{ style: { color: 'black' } }}
                    />
                    <TextField
                        label="Write a message..."
                        name='message'
                        fullWidth
                        required
                        rows={4}
                        multiline
                        sx={{ marginBottom: '1rem' }}
                        inputProps={{ style: { color: 'black' } }}
                        InputLabelProps={{ style: { color: 'black' } }}
                    />
                    <Button
                        sx={{
                            backgroundColor: '#3081D0',
                            color: 'white',
                            marginTop: '1rem',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default ContactUs;