import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import SectionTitle from "../../../Components/Shared/SectionTitle";


const Featured = () => {
    return (
        <Container sx={{marginBottom: '5rem'}}>
            <SectionTitle heading={'Featured Projects'} subHeading={'Explore Our Work'}></SectionTitle>

            <Grid container spacing={3}>
                <Grid xs={12} sm={6} md={4} item>
                    <Card
                        variant="outlined"
                        sx={{
                            // width: 320,
                            // overflow: 'auto',
                            height: 210,
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
                            {/* <Avatar size="lg" >
                                <FaUsers />
                            </Avatar> */}

                        </Box>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1rem', marginTop: '1rem' }} level="title-lg">Employee Directory and Profiles</Typography>
                            <Typography level="body-sm">
                                A system for maintaining a comprehensive employee directory with detailed profiles, including personal information, job history, skills, and contact details.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <Card
                        variant="outlined"
                        sx={{
                            // width: 320,
                            // overflow: 'auto',
                            height: 210,
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
                        </Box>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1rem', marginTop: '1rem' }} level="title-lg">Attendance Tracking System</Typography>
                            <Typography level="body-sm">
                                A module that allows employees to log their attendance, and managers to track attendance records. Include features like clock-in/out, leave requests, and real-time reporting.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <Card
                        variant="outlined"
                        sx={{
                            // width: 320,
                            // overflow: 'auto',
                            height: 210,
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
                        </Box>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1rem', marginTop: '1rem' }} level="title-lg">Leave Management System</Typography>
                            <Typography level="body-sm">
                                A system for managing employee leave requests, approvals, and tracking accrued leave balances. Ensure the system handles different types of leaves (sick leave, vacation, etc.).
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <Card
                        variant="outlined"
                        sx={{
                            // width: 320,
                            // overflow: 'auto',
                            height: 210,
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
                        </Box>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1rem', marginTop: '1rem' }} level="title-lg">Performance Management System</Typography>
                            <Typography level="body-sm">
                                A performance management module for setting goals, conducting employee evaluations, and providing feedback. Include features for performance metrics and development plans.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <Card
                        variant="outlined"
                        sx={{
                            // width: 320,
                            // overflow: 'auto',
                            height: 210,
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
                        </Box>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1rem', marginTop: '1rem' }} level="title-lg">Training and Development Platform</Typography>
                            <Typography level="body-sm">
                                A centralized platform for managing employee training programs, tracking completed courses, and facilitating continuous learning and development.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <Card
                        variant="outlined"
                        sx={{
                            // width: 320,
                            // overflow: 'auto',
                            height: 210,
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
                        </Box>
                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1rem', marginTop: '1rem' }} level="title-lg">Employee Surveys and Feedback</Typography>
                            <Typography level="body-sm">
                                A module for conducting employee surveys, collecting feedback, and measuring employee satisfaction. Include analytics to derive actionable insights.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Featured;