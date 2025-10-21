const page = () => {
  return (
    <div className="grid grid-cols-1 h-full grid-rows-1 md:grid-cols-3">
        <section>
            <p>Login</p>
        </section>
        <section className="hidden md:block md:col-span-2">
            <p>imagem</p>
        </section>
    </div>
  )
}

export default page