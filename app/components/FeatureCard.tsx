import React from 'react';
import { FeatureCardProps } from '../types';

export const FeatureCard: React.FC<
    FeatureCardProps
> = ({
    icon,
    title,
    description,
}): JSX.Element => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            {React.cloneElement(icon, {
                className:
                    'w-6 h-6 text-purple-600',
            })}
        </div>
        <h3 className="text-xl font-semibold mb-2">
            {title}
        </h3>
        <p className="text-gray-600">
            {description}
        </p>
    </div>
);
