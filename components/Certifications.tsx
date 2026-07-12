export default function Certifications() {
  const certificates = [
   {
  title: "NPTEL - Java Programming",
  issuer: "NPTEL",
  year: "2025",
  description:
    "Successfully completed the NPTEL Java Programming certification, gaining a strong foundation in Java programming concepts, object-oriented programming (OOP), control statements, arrays, methods, classes, objects, inheritance, polymorphism, exception handling, and basic file handling.",
   },
    {
      title: "C Programming",
      issuer: "Udemy",
      year: "2025",
      description:
        "Completed a comprehensive C Programming course covering programming fundamentals, data structures, pointers, file handling, and problem-solving techniques.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">
        📜 Certifications
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">🎓</div>

            <h3 className="mt-4 text-2xl font-bold text-blue-700">
              {certificate.title}
            </h3>

            <p className="mt-2 font-semibold text-gray-600">
              {certificate.issuer}
            </p>

            <span className="mt-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              {certificate.year}
            </span>

            <p className="mt-5 leading-7 text-gray-700">
              {certificate.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}