const page = () => {
  return (
    <div className="grid grid-cols-1 h-screen grid-rows-1 md:grid-cols-3">
        <section className="flex flex-col justify-start bg-[#f9f9f9] items-center w-full">
           <div className="flex flex-col items-center">
                <h1>Agendei!</h1>
                <h2>Login</h2>
           </div>
           <div>
                {/* componente  */}
           </div>
        </section>
        <section className="hidden md:block md:col-span-2 bg-[#1c1c1c] w-full">
            <p>imagem</p>
        </section>
    </div>
  )
}

export default page