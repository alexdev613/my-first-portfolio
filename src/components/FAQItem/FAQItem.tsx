import { FAQAnswer, FAQItemContainer, FAQQuestion } from "./styles";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    return (
        <FAQItemContainer>
            <FAQQuestion>{question}</FAQQuestion>
            <FAQAnswer>{answer}</FAQAnswer>
        </FAQItemContainer>
    )
}

export default FAQItem;