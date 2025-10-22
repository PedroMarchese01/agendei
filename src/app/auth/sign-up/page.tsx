const Page = () => {
  return (
    <main className="grid grid-cols-1 h-[93vh] grid-rows-1 md:grid-cols-3">
      
      {/* === Coluna de Cadastro === */}
      <section className="flex flex-col justify-start bg-[#f9f9f9] items-center w-full p-6">
        <header className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-bold">Agendei!</h1>
          <h2 className="text-lg text-gray-600">Cadastro</h2>
        </header>

        <article className="w-full max-w-md">
          {/* componente de formulário ou conteúdo principal */}
        </article>
        <footer>
          {/* botões, voltar / proximo / enviar etc */}
        </footer>
        
      </section>

      {/* === Coluna de Imagem / Lado direito === */}
      <aside className="hidden md:flex md:col-span-2 bg-[#1c1c1c] w-full justify-center items-center">
        <figure>
          {/* Substituir por uma imagem real futuramente */}
          <p className="text-white">imagem</p>
        </figure>
      </aside>

    </main>
  )
}

export default Page