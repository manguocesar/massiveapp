import {
    Body, Button, Column, Container, Head, Heading, Hr,
    Html, Img, Link, Preview, Row, Section, Text, Tailwind
} from '@react-email/components';
import * as React from 'react';

const BasicEmail = () => {

    return (
        <Html>
            <Button
            href="https://massiveapp.vercel.app/"
            style={{background: '#000', color: '#fff', padding: '12px 20px'}}>
                Click Me
            </Button>
        </Html>
    );
};

export default BasicEmail;