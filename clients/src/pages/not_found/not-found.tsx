import React, {useEffect} from 'react';
import PageContent from '../../Components/PageModules/PageContent';
import HomeIcon from '@mui/icons-material/Home';
import { useData } from '../../Context/Context';
import { 
    Typography,
    Container,
    Box,
    Button,
} from '@mui/material';
import { boxSizing } from '@mui/system'; 


function NotFound() {


    /* VARIABLE DECLERATION
    -------------------------------------------------------------------------------------*/
 
    const { frame, drawerOpen } = useData(useData);
    const [var_visibleFrame, set_visibleFrame] = frame;
    const [var_drawer_open, set_drawer_open] = drawerOpen;
    


    /* EVENT LISTENERS
    -------------------------------------------------------------------------------------*/
    useEffect(() => {
        set_visibleFrame(true);
    }, [var_visibleFrame]);
    useEffect(() => {
        set_drawer_open(false);
    }, []);
    

    /* ASYNC FUNCTIONS
    -------------------------------------------------------------------------------------*/



    /* EVENT FUNCTIONS
    -------------------------------------------------------------------------------------*/



    /* RENDER APP
    -------------------------------------------------------------------------------------*/



    return (
        <>
            <PageContent>
                <Container maxWidth="xl">
                    <Box sx={{maxWidth: '800px', m: '0 auto', p: {sm: '32px 16px', md: '64px 16px'} }}>
                        <Box sx={{padding: '', textAlign: 'center'}}>
                            <Typography variant="h2" sx={{color: 'text.secondary', fontSize: {xs: '120px', sm: '160px', md:'190px'}, lineHeight: '1'}}>404</Typography>
                        </Box>
                        <Box sx={{padding: '', textAlign: 'center', lineHeight: '1'}}>
                            <Typography variant="h2" sx={{color: 'text.secondary', fontSize: {xs: '32px', sm: '42px', md:'50px'}}}>Page Not Found</Typography>
                        </Box>
                        <Box sx={{textAlign: 'center', mt: '24px'}}>
                            <Box>
                                <Typography variant="body1" sx={{fontSize: '22px'}}>
                                    UH OH! You're lost
                                </Typography>
                                <Typography variant="body1" sx={{fontSize: '16px'}}>
                                    The page you are looking for does not exist.
                                </Typography>
                                <Button  sx={{mt: '16px'}} variant="contained" startIcon={<HomeIcon />}>Home</Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </PageContent>
        </>
    )
}

export default NotFound
