// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-green-100 to-white flex flex-col">
      <Head>
        <title>MultiCash | Plataforma de Recebíveis</title>
      </Head>

      <header className="bg-white shadow p-4 flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold text-green-700">MultiCash</h1>
        <nav className="flex gap-4">
          <Link href="/cadastro" className="flex items-center gap-2 text-green-600 font-semibold hover:underline">
            <FaUserPlus /> Criar Conta
          </Link>
          <Link href="/login" className="flex items-center gap-2 text-gray-700 font-semibold hover:underline">
            <FaSignInAlt /> Acessar Conta
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight mb-4">
            Centralize seus recebíveis com inteligência
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Plataforma moderna para gestão, conciliação e antecipação de recebíveis em Real, Dólar e Euro.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <Link
              href="/cadastro"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              Criar Conta
            </Link>
            <Link
              href="/login"
              className="bg-white text-green-700 border border-green-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Acessar Conta
            </Link>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-green-700 mb-1">Multi-moeda</h3>
              <p className="text-gray-600 text-sm">Cadastre contas a receber em BRL, USD e EUR.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-green-700 mb-1">Antecipação inteligente</h3>
              <p className="text-gray-600 text-sm">Simule e antecipe recebíveis com cotação atualizada.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-green-700 mb-1">Painel completo</h3>
              <p className="text-gray-600 text-sm">Visualize relatórios e gráficos interativos.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-green-700 mb-1">Conciliação bancária</h3>
              <p className="text-gray-600 text-sm">Controle contas caixa e acompanhe saldos em cada moeda.</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-4 border-t mt-12">
        &copy; {new Date().getFullYear()} MultiCash. Todos os direitos reservados.
      </footer>
    </div>
  );
}