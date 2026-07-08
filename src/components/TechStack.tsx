const tech = [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
];

export default function TechStack() {
    return (
        <section className="max-w-3xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold">Tech Stack</h2>

            <p className="mt-6 leading-8 text-gray-600">
                These are the tools and technologies I use most often.
            </p>

            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tech.map((t) => (
                    <li
                        key={t}
                        className="inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 bg-white shadow-sm"
                    >
                        {t}
                    </li>
                ))}
            </ul>
        </section>
    );
}