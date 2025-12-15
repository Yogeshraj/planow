const Seo = () => {
    return (
        <>
            {/* Basic Meta */}
            <meta charSet='UTF-8' />
            <meta name='robots' content='index, follow' />
            <meta httpEquiv='X-Robots-Tag' content='index, follow' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />
            <meta
                name='description'
                content='Planow is a productivity app that uses the Eisenhower Matrix to prioritize tasks. Act on what matters now, delegate, schedule, and reduce distractions.'
            />
            <meta
                name='keywords'
                content='todo app, task management, productivity app, Eisenhower matrix, priority matrix, urgent important matrix, daily planner, schedule tasks, organize tasks, to-do list web app, productivity tools'
            />

            <meta name='author' content='Yogesh Raj Kabilan' />
            <meta name='publisher' content='Planow' />

            {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://planow.app/' />
            <meta
                property='og:title'
                content='Planow - Prioritize Your Productivity'
            />
            <meta
                property='og:description'
                content='Planow is a productivity app that uses the Eisenhower Matrix to prioritize tasks. Act on what matters now, delegate, schedule, and reduce distractions.'
            />
            <meta property='og:image' content='https://planow.app/og-image.png' />

            {/* Twitter (X) Preview */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content='https://planow.app/' />
            <meta
                property='twitter:title'
                content='Planow - Prioritize Your Productivity'
            />
            <meta
                property='twitter:description'
                content='Planow is a productivity app that uses the Eisenhower Matrix to prioritize tasks. Act on what matters now, delegate, schedule, and reduce distractions.'
            />
            <meta
                property='twitter:image'
                content='https://planow.app/og-image.png'
            />

            {/* Canonical */}
            <link rel='canonical' href='https://planow.app/' />

            {/* PRODUCT SCHEMA */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "Planow",
                        operatingSystem: "Web",
                        applicationCategory: "ProductivityApplication",
                        description:
                            "Planow is a productivity app based on the Eisenhower Matrix, helping you prioritize tasks, focus on important work, schedule tasks, and improve daily task management.",
                        url: "https://planow.app",
                        image: "https://planow.app/og-image.png",
                        publisher: {
                            "@type": "Organization",
                            name: "Planow",
                            url: "https://planow.app",
                            logo: "https://planow.app/og-image.png",
                        },
                        author: {
                            "@type": "Person",
                            name: "Yogesh Raj Kabilan",
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            ratingCount: "112",
                        },
                        applicationSubCategory: "Task Management; To-Do List",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "INR",
                        },
                    }),
                }}
            />

            {/* FAQ SCHEMA */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is Planow?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Planow is a productivity tool that uses the Eisenhower Matrix to help you prioritize tasks based on urgency and importance.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Planow free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, Planow is completely free to use for all users.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do I need to create an account?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, you can use Planow without an account. Login is optional and helps you sync your tasks across devices.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How does the Eisenhower Matrix work?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The Eisenhower Matrix categorizes tasks into four quadrants: Do Now, Schedule for Later, Delegate, and Eliminate. Planow helps you organize tasks accordingly.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* HOWTO SCHEMA */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "How to Use the Eisenhower Matrix in Planow",
                        description:
                            "A simple guide on using the Eisenhower Matrix inside Planow to prioritize tasks effectively.",
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Open Planow",
                                text: "Go to https://planow.app to access the app instantly.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Add a Task",
                                text: "Click the Add Task button and enter your task details.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Choose a Quadrant",
                                text: "Select whether the task is urgent, important, both, or neither.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Drag and Drop Tasks",
                                text: "Move tasks between quadrants as priorities change.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Review Daily",
                                text: "Use the matrix to plan your day and eliminate unnecessary tasks.",
                            },
                        ],
                    }),
                }}
            />
        </>
    )
}

export default Seo