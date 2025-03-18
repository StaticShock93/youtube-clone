import React from 'react';
import Card from './Card'; // Assuming you have a Card component

interface CardRowProps {
    cards: Array<{ id: number; title: string; description: string; imageUrl: string }>;
}

export const CardRow: React.FC<CardRowProps> = ({ cards }) => {
    return (
        <div className="card-row flex items-center justify-between">
            {cards.map(card => (
                <Card key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
            ))}
        </div>
    );
};

// export default CardRow;