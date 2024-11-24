'use client';

import React from 'react';
import {
    ArrowRight,
    Check,
    Move,
    Save,
    Layout,
    Plus,
    Sparkles,
    LucideIcon,
} from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
    icon: React.ReactElement<LucideIcon>;
    title: string;
    description: string;
}

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const FeatureCard: React.FC<
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
        <h3 className="text-xl font-semibold mb-2 text-black">
            {title}
        </h3>
        <p className="text-gray-600">
            {description}
        </p>
    </div>
);

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}): JSX.Element => {
    const baseStyles =
        'px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto';
    const variantStyles = {
        primary:
            'bg-purple-600 text-white hover:bg-purple-700',
        secondary:
            'bg-purple-50 text-purple-600 hover:bg-purple-100',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}>
            {children}
        </button>
    );
};

export default function Home(): JSX.Element {
    const features: Array<FeatureCardProps> =
        [
            {
                icon: <Move />,
                title: 'Floating Interface',
                description:
                    'Drag and position your todo list anywhere on the page. It stays visible as you browse different websites.',
            },
            {
                icon: <Save />,
                title: 'Auto-Saving',
                description:
                    "Your tasks are automatically saved locally, ensuring they're always there when you need them.",
            },
            {
                icon: <Layout />,
                title: 'Minimal Design',
                description:
                    "Clean and intuitive interface that doesn't get in the way of your browsing experience.",
            },
            {
                icon: <Plus />,
                title: 'Quick Add',
                description:
                    'Add new tasks instantly with just a single click. No need to open new tabs or windows.',
            },
            {
                icon: <Check />,
                title: 'Task Management',
                description:
                    'Mark tasks as complete, edit them, or delete with simple controls.',
            },
            {
                icon: <Sparkles />,
                title: 'Always Available',
                description:
                    'Access your todo list instantly on any webpage, whenever inspiration strikes.',
            },
        ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <header className="container mx-auto px-4 pt-20 pb-32 text-center">
                <div className="animate-bounce inline-block p-2 bg-purple-100 rounded-full mb-6">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Your Tasks,{' '}
                    <span className="text-purple-600">
                        Everywhere
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    A floating todo list
                    that follows you
                    across the web,
                    helping you stay
                    organized without
                    switching tabs.
                </p>
                <a
                    className="px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto"
                    target="_blank_"
                    href="https://chromewebstore.google.com/detail/floating-todo-app/baofnehekhobikaeeidlhjaggcehnpld">
                    <Button>
                        Add to Chrome
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </a>
            </header>
            {/* Features Grid */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(
                        (
                            feature,
                            index,
                        ) => (
                            <FeatureCard
                                key={
                                    index
                                }
                                icon={
                                    feature.icon
                                }
                                title={
                                    feature.title
                                }
                                description={
                                    feature.description
                                }
                            />
                        ),
                    )}
                </div>
            </section>
            {/* Demo Section */}
            const DemoSection: React.FC
            = (): JSX.Element => (
            <section className="bg-purple-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        See it in Action
                    </h2>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Browser Window Mock */}
                        <div className="bg-white rounded-lg shadow-xl p-4">
                            {/* Browser Controls */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <div className="w-full max-w-xl mx-auto bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                                    example.com
                                </div>
                            </div>

                            {/* Demo Content Area - Increased height and made it relative */}
                            <div className="relative h-[800px] bg-gray-50 rounded overflow-hidden">
                                {/* Website Content Placeholder */}
                                <div className="absolute inset-0 p-8">
                                    <div className="w-full h-8 bg-gray-200 rounded-full mb-4"></div>
                                    <div className="grid grid-cols-3 gap-4 mb-4">
                                        <div className="h-32 bg-gray-200 rounded"></div>
                                        <div className="h-32 bg-gray-200 rounded"></div>
                                        <div className="h-32 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="w-3/4 h-4 bg-gray-200 rounded-full mb-2"></div>
                                    <div className="w-1/2 h-4 bg-gray-200 rounded-full"></div>
                                </div>

                                {/* Todo Widget Image - Adjusted positioning and size */}
                                <div className="absolute right-8 top-32 w-64 transition-all duration-300 hover:scale-105">
                                    <Image
                                        src="/screen.png"
                                        alt="Floating Todo Widget Demo"
                                        width={
                                            256
                                        }
                                        height={
                                            384
                                        }
                                        priority
                                        className="drop-shadow-xl"
                                        style={{
                                            maxWidth:
                                                '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ){/* CTA Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-black">
                    Ready to boost your
                    productivity?
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Join thousands of
                    users who are
                    already staying
                    organized across the
                    web with Floating
                    Todo App.
                </p>
                <a
                    className="px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto"
                    target="_blank"
                    href="https://chromewebstore.google.com/detail/floating-todo-app/baofnehekhobikaeeidlhjaggcehnpld">
                    <Button>
                        Install Now -
                        It's Free
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </a>
            </section>
            {/* Footer */}
            <footer className="bg-gray-50 py-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>
                        ©{' '}
                        {new Date().getFullYear()}{' '}
                        Floating Todo
                        App. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
