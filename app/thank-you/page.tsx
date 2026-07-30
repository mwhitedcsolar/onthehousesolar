import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-16 text-center text-gray-900">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-xl sm:p-16">
        <Image
          src="/logo.png"
          alt="On The House Solar Logo"
          width={220}
          height={220}
          className="mx-auto mb-8"
          priority
        />

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
          ✓
        </div>

        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Your solar qualification request has been received. A member of our
          team will review your information and contact you soon.
        </p>

        <p className="mt-4 text-gray-600">
          Please keep an eye on your phone and email.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-green-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:bg-green-800"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}