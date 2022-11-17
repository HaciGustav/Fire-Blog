import React from 'react';
import { Avatar, Container, Email, Name, ProfileCard } from './Profile.style';

const Profile = () => {
    return (
        <Container>
            <ProfileCard>
                <Avatar
                    src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiN-GI6m2DnQonY8yV4IMpStO5d498r3Ac9FNQcwmG&s'
                    }
                />
                <h5>User Name</h5>
                <Name>⚜ HaciGustav</Name>
                <h5>Email</h5>
                <Email>⚜ hacigustav@gmail.com</Email>
            </ProfileCard>
        </Container>
    );
};

export default Profile;
