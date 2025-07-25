// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>MultiCash | Plataforma de Recebíveis</title>
      </Head>
      <main className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-green-700">Bem-vindo ao MultiCash</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-md">
          Gerencie, antecipe e acompanhe seus recebíveis em Real, Dólar e Euro com facilidade.
        </p>
        <div className="flex gap-4">
          <Link href="/cadastro" className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition">
            Criar Conta
          </Link>
          <Link href="/login" className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Acessar Conta
          </Link>
        </div>
      </main>
    </div>
  );
}
