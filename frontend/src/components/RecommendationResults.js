import React, { useState } from 'react';
import { 
    VStack, 
    Heading, 
    Box, 
    Text, 
    Flex, 
    Progress 
} from '@chakra-ui/react';

function RecommendationCard({ brand, size, confidence }) {
    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            p={4} 
            width="100%"
        >
            <Flex justifyContent="space-between">
                <Text fontWeight="bold">{brand}</Text>
                <Text>Taille recommandée: {size}</Text>
            </Flex>
            <Progress 
                value={confidence} 
                colorScheme="green" 
                mt={2} 
            />
            <Text fontSize="sm">
                Précision de la recommandation: {confidence}%
            </Text>
        </Box>
    );
}

function RecommendationResults() {
    const [recommendations, setRecommendations] = useState([
        { 
            brand: "Zara", 
            size: "M", 
            confidence: 85 
        },
        { 
            brand: "H&M", 
            size: "L", 
            confidence: 75 
        },
        { 
            brand: "Nike", 
            size: "M", 
            confidence: 90 
        }
    ]);

    return (
        <VStack spacing={4} width="100%">
            <Heading>Vos Recommandations de Taille</Heading>
            
            {recommendations.map((rec, index) => (
                <RecommendationCard 
                    key={index}
                    brand={rec.brand}
                    size={rec.size}
                    confidence={rec.confidence}
                />
            ))}
        </VStack>
    );
}

export default RecommendationResults;
