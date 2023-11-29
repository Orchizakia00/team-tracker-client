import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import * as React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import SectionTitle from '../../Components/Shared/SectionTitle';

const Faq = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container sx={{
            width: '70%',
            minHeight: '100vh',
            marginBottom: '5rem'
        }}>
            <div className='w-full my-10'>
                <img className='w-full' src="https://i.ibb.co/tmSMJyQ/faq-banner-concept-questionnaire-giving-information-users-website-customers-with-cartoon-people-vect.jpg" alt="" />
            </div>
            <div className='mb-10'>
                <SectionTitle heading={'FAQ'} subHeading={'Frequently Asked Questions'}></SectionTitle>
            </div>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<FaArrowCircleDown />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>
                        What is the purpose of the Employee Management System?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The Employee Management System is designed to streamline HR processes, manage employee data, and enhance overall workforce efficiency. It includes features such as attendance tracking, leave management, performance evaluations, and more.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<FaArrowCircleDown />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>What training and development opportunities are available?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Information about training programs and professional development opportunities can be found in the Training and Development section. We regularly update this section with upcoming workshops, courses, and resources to support your growth.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<FaArrowCircleDown />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>How are employee performance evaluations conducted?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Performance evaluations are conducted annually and involve a comprehensive review of your work. Your manager will assess your achievements, strengths, and areas for improvement. The process includes a two-way discussion to set goals for the upcoming year.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<FaArrowCircleDown />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>How can I report an issue or provide feedback?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We value your feedback! You can report issues or provide feedback by using the Contact Us section. Your input helps us continuously improve our processes and services.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<FaArrowCircleDown />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>What employee benefits does the company offer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Details about employee benefits, including health insurance, retirement plans, and other perks, can be found in the Employee Benefits section. This area provides comprehensive information about the benefits package we offer.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
};

export default Faq;