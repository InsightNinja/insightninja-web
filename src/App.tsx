import React, {useEffect, useState} from 'react';
import './App.css';

import {
    ChakraProvider,
    Heading,
    Text,
    Flex,
    HStack,
    Box,
} from '@chakra-ui/react'
import theme from "./theme/Theme";

function App() {
    const [integrationData, setIntegrationData] = useState<any>([])
    useEffect(() => {
        setIntegrationData(getIntegrationData())
    }, [])

    return (
        <ChakraProvider theme={theme}>
            <Heading marginBottom={8}>Overview</Heading>
            <br/>
            <HStack spacing={32} marginBottom={64}>
                {
                    integrationData.map(function (integration: any, index: any) {
                        return <React.Fragment key={index}>
                            <IntegrationOverviewTextBody {...integration}/>
                        </React.Fragment>
                    })
                }
            </HStack>
            <br/>
            <Heading marginBottom={8}>Insights</Heading>
        </ChakraProvider>
    )
}

function getIntegrationData() {
    let integrations = []
    integrations.push({
        heading: 'Play Store',
        count: 10,
        type: 'GROWTH',
        percentage: 3
    })
    integrations.push({
        heading: 'Apple App Store',
        count: 10,
        type: 'GROWTH',
        percentage: 3
    })
    integrations.push({
        heading: 'Social Media',
        count: 10,
        type: 'GROWTH',
        percentage: 3
    })
    integrations.push({
        heading: 'Email Queries',
        count: 10,
        type: 'GROWTH',
        percentage: 3
    })
    return integrations
}

function IntegrationOverviewTextBody({heading, count, type, percentage}: any) {
    return (
        <Box>
            <Text marginBottom={8}>{heading}</Text>
            <Flex>
                <Text fontSize={20} fontWeight={'bold'}>{count}</Text>
                <Text marginLeft={16} marginBottom={8} color={'green'}>+%{percentage} WoW</Text>
            </Flex>
            <Text color={'gray'}>Rating (Last 7 days)</Text>
        </Box>
    )
}

export default App;
