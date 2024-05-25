// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-500 flex justify-center items-center">
      <Head>
        <title>Blockchain & AI Project</title>
        <meta name="description" content="Main page for Blockchain & AI project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8">Final_Project</h1>
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Blockchain & AI Project</h1>
        <div className="space-x-10">
          <Link className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 ease-in-out" href="/blockchain">
              Blockchain Project
          </Link>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 ease-in-out" href="/ai">
              AI Project
          </Link>
        </div>
      </main>
    </div>
  );
}
