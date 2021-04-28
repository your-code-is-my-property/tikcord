import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid, GridItem } from '@chakra-ui/react';

// components

import Sidebar from '../../components/app/Sidebar';
import Feed from '../../components/app/Feed';
import Users from '../../components/app/Users';

export default function App() {
    const { user, setUser } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(user).length == 0) router.push('/account/login');
    }, [user, router]);

    return (
        <section>
            <Head>
                <title>Tikcord</title>
                <meta name="description" content="Unleash your creativity" />
            </Head>

            <Grid
                gap={4}
                templateColumns="repeat(3, 1fr)"
                className={ }
            >
                <GridItem><Sidebar /></GridItem>
                <GridItem><Feed /></GridItem>
                <GridItem><Users /></GridItem>
            </Grid>

        </section>
    );

}