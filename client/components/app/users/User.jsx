import { Text, Avatar } from '@chakra-ui/react';

export default function User({ user }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
            <Avatar src={user.profile} />
            <div style={{ marginLeft: "10px" }}>
                <Text fontSize="lg">{user.name}</Text>
                <Text style={{ color: "#CBD5E0" }} fontSize="md">{user.email}</Text>
            </div>
        </div>
    );
}