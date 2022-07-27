import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import questions from '../../data/faq.json';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: "black", 
    border: "4px solid black",
    marginBottom: "25px",
    borderRadius: "8px"
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white', fontWeight: "bold" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: "#17141d",
    borderRadius: "10px",
    border: "1px solid black",
    color: "#EEE",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: "white",
    borderRadius: "10px",
}));

export default function CustomizedAccordions(props) {
    const [expanded, setExpanded] = React.useState('panel1');
    
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {
                questions.map((questionnaire, i) => {
                    const key_val = {
                        key: "panel" + (i + 1)
                    };
                    return <Accordion expanded={expanded === key_val.key} onChange={handleChange(key_val.key)}>
                        <AccordionSummary aria-controls={`${key_val.key}d-content`} id={`${key_val.key}d-header`}>
                            <Typography style={{
                                fontSize: "20px",
                                fontWeight: "400",
                                fontFamily: "Poppins, sans-serif",
                            }}>{questionnaire.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{
                                fontSize: "18px",
                                fontFamily: "Overpass, sans-serif",
                            
                            }}>
                                {questionnaire.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                })
            }
        </div>
    );
}