import Image from "next/image";
import profile from "@/data/profile";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-6 py-16 text-center">

      {/* Profile Image */}
      <div className="overflow-hidden rounded-full border-4 border-blue-500 shadow-2xl">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={180}
          height={180}
          className="h-44 w-44 object-cover"
        />
      </div>

      {/* Name */}
      <div>
        <h1 className="text-5xl font-extrabold text-gray-900">
          {profile.name}
        </h1>

        {/* Role */}
        <p className="mt-3 text-xl font-semibold text-blue-600">
          {profile.role}
        </p>

        {/* FORGE Badge */}
        <div className="mt-4 flex justify-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow">
            🚀 FORGE Apprentice • {profile.apprenticeId}
          </span>
        </div>

        {/* About */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          {profile.shortBio}
        </p>

        {/* Achievement Badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">

          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            🎓 CGPA 9.0
          </span>

          <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
            🥇 Ideathon Winner
          </span>

          <span className="rounded-full bg-purple-100 px-4 py-2 font-semibold text-purple-700">
            ♟️ State Chess Player
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
            ☁️ AWS Trainee
          </span>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="/AbhiramResume.pdf"
            download
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            📄 Download Resume
          </a>

          <a
            href={`mailto:${profile.contact.email}`}
            className="rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            📧 Contact Me
          </a>

        </div>
      </div>
    </header>
  );
}