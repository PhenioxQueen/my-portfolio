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
              CGPA: 9.00
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
              No Backlogs
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            Pre-University Course (PUC)
          </h3>

          <p className="mt-2 text-lg font-medium">
            Poorna Prajna College, Admar
          </p>

          <p className="mt-2 text-gray-600">
            2021 – 2023
          </p>
        </div>

      </div>
    </section>
  );
}