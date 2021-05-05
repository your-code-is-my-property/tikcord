import useAuthContext from '../../context/contextHook';
import FETCH_USER_QUERY from '../../utils/graphql/fetchUserQuery';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import {
    Spinner,
    Center,
    Avatar,
    Text,
    Button
} from '@chakra-ui/react';

export default function Profile() {
    const router = useRouter();

    const { user } = useAuthContext();
    const { email } = router.query;

    if (!user) router.push("/account/login")

    const { loading, data, error } = useQuery(FETCH_USER_QUERY, { variables: { email } });

    if (data) {
        console.log(data)
    }

    return (
        <section>
            {loading && (
                <Center mt={20}>
                    <Spinner />
                </Center>
            )}
            {!data && (
                <Center mt={20} display="flex" flexDirection="column">
                    <Text fontSize="4xl">Seems Like There Is No Such User</Text>
                    <Button mt={5} variant="outline" onClick={() => router.push("/app")}>Return To Home</Button>
                </Center>
            )}
            {data && data.getUser && (
                <Center mt={10} display="flex" flexDirection="column">
                    <Avatar src={data.getUser.profile} name={data.getUser.name} width={100} height={100} />
                    <Text mt={2} fontSize="2xl">{data.getUser.name.toUpperCase()}</Text>
                    <Text fontSize="md" color="gray.200">{data.getUser.email}</Text>
                    <Text mt={2} fontSize="xl" color="gray.200">{data.getUser.bio}</Text>

                    {data.getUser.email === user.email && (
                        <Button variant="outline" mt={5}>Edit Profile</Button>
                    )}
                </Center>
            )}
        </section>
    );

}