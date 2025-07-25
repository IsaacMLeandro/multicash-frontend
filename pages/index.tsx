// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex flex-col">
      <Head>
        <title>MultiCash | Plataforma de Recebíveis</title>
      </Head>

      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">MultiCash</h1>
        <nav className="space-x-4">
          <Link href="/cadastro" className="text-green-600 hover:underline font-medium">
            Criar Conta
          </Link>
          <Link href="/login" className="text-gray-700 hover:underline font-medium">
            Acessar Conta
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Bem-vindo ao MultiCash
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Gerencie e antecipe seus recebíveis com segurança. Suporte para Real, Dólar e Euro.
        </p>
        <div className="flex gap-6">
          <Link
            href="/cadastro"
            className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
          >
            Criar Conta
          </Link>
          <Link
            href="/login"
            className="bg-white text-green-700 border border-green-600 px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            Acessar Conta
          </Link>
        </div>
        <div className="mt-12 max-w-4xl text-left">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Funcionalidades:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Cadastro de contas a receber em três moedas (BRL, USD, EUR).</li>
            <li>Antecipação de títulos com cotação atualizada.</li>
            <li>Painel intuitivo com relatórios e gráficos interativos.</li>
            <li>Conversão automática de moedas baseada no dia do lançamento.</li>
            <li>Conciliação bancária e gestão de contas caixa multi-moeda.</li>
          </ul>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        &copy; {new Date().getFullYear()} MultiCash. Todos os direitos reservados.
      </footer>
    </div>
  );
}

