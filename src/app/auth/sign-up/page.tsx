const page = () => {
  return (
<div className="flex items-center justify-center w-screen h-screen">
      <section className="flex shadow-lg border rounded-lg h-[90vh] w-[50vw]">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full h-full">

          {/* Lado esquerdo: imagem ou conteúdo ilustrativo */}
          <figure className="bg-purple-500 hidden md:flex md:justify-center md:items-center md:text-center">
            <p className="text-white">aqui vem uma imagem ou algo assim</p>
          </figure>

          {/* Lado direito: conteúdo */}
          <main className="col-span-2 grid grid-cols-1 grid-rows-3">
            
            {/* Header com título e subtítulo */}
            <header>
              <h1>Agendei!</h1>
              <h2>Cadastre-se</h2>
              <p>barra de progresso</p>
            </header>

            {/* Conteúdo do passo a passo */}
            <section>
              {/* aqui vem conteudo de passo a passo */}
            </section>

            {/* Footer do conteúdo */}
            <footer>
              {/* footer */}
            </footer>

          </main>
        </div>
      </section>
    </div>
  )
}

export default page