export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">
        🎓 Education
      </h2>

      <div className="space-y-8">

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            B.E. Information Science & Engineering
          </h3>

          <p className="mt-2 text-lg font-medium">
            Nagarjuna College of Engineering & Technology
          </p>

          <p className="mt-2 text-gray-600">
            2023 – Present
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
              CGPA: 9.03 / 10.0
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            Pre-University Course (PUC)
          </h3>

          <p className="mt-2 text-lg font-medium">
            BGS PU College, Gowribidanur, Karnataka
          </p>

          <p className="mt-2 text-gray-600">
            2021 – 2023
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
              Percentage: 89.66%
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            Secondary School Leaving Certificate (SSLC)
          </h3>

          <p className="mt-2 text-lg font-medium">
            Adarsha Vidyalaya, Gowribidanur
          </p>

          <p className="mt-2 text-gray-600">
            Graduated: 2020
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
              Score: 621 / 625 (96.33%)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
