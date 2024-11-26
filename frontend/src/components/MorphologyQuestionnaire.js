import React, { useState } from 'react';
import { 
    VStack, 
    Input, 
    Button, 
    FormControl, 
    FormLabel, 
    Select 
} from '@chakra-ui/react';
import axios from 'axios';

function MorphologyQuestionnaire() {
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        chestCircumference: '',
        hipCircumference: '',
        bodyType: ''
    });

    const [currentStep, setCurrentStep] = useState(0);

    const questions = [
        {
            label: "Votre taille (cm)",
            key: "height",
            type: "number"
        },
        {
            label: "Votre poids (kg)",
            key: "weight", 
            type: "number"
        },
        {
            label: "Tour de poitrine (cm)",
            key: "chestCircumference",
            type: "number"
        },
        {
            label: "Tour de hanches (cm)",
            key: "hipCircumference",
            type: "number"
        },
        {
            label: "Type de morphologie",
            key: "bodyType",
            type: "select",
            options: [
                "Rectangulaire",
                "Triangle inversé",
                "Sablier",
                "Poire",
                "Pomme"
            ]
        }
    ];

    const handleChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/users/recommend`, 
                formData
            );
            
            // Gérer la réponse de recommandation
            console.log(response.data);
        } catch (error) {
            console.error("Erreur de recommandation", error);
        }
    };

    const renderCurrentQuestion = () => {
        const question = questions[currentStep];

        return (
            <FormControl>
                <FormLabel>{question.label}</FormLabel>
                {question.type === 'select' ? (
                    <Select 
                        placeholder="Sélectionnez votre type"
                        onChange={(e) => handleChange(question.key, e.target.value)}
                    >
                        {question.options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Select>
                ) : (
                    <Input 
                        type={question.type}
                        value={formData[question.key]}
                        onChange={(e) => handleChange(question.key, e.target.value)}
                    />
                )}
                
                {currentStep < questions.length - 1 ? (
                    <Button onClick={handleNext}>Suivant</Button>
                ) : (
                    <Button onClick={handleSubmit}>Obtenir ma recommandation</Button>
                )}
            </FormControl>
        );
    };

    return (
        <VStack spacing={4}>
            {renderCurrentQuestion()}
        </VStack>
    );
}

export default MorphologyQuestionnaire;
