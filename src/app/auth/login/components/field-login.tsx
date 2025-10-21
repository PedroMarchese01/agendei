  "use client"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Checkbox } from "../../../../components/ui/checkbox"
  import { Label } from "../../../../components/ui/label"
  import { useEffect, useState } from "react"

  const Field = () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com)(\.br)?$/i
    const api = "/api/users"
    const [UsersData , setUserData] = useState([])
    const [formLogin, setFormLogin] = useState({
      email: "",
      validEmail: false,
      password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
      fetch(`${api}`)
      .then((res) => res.json())
        .then((json) => setUserData(json))
        .catch((err) => console.error(err))
    }, []) // [] = roda apenas uma vez

    return (
      <>
        <article className="flex flex-col items-center w-full px-4">
          <div className="flex flex-col w-full items-center mb-2">
            {/* Email */}
            <Input
              type="email"
              placeholder="Digite seu email"
              value={formLogin.email}
              onChange={(e) =>
                setFormLogin((prev) => ({
                  ...prev,
                  email: e.target.value,
                  validEmail: emailRegex.test(e.target.value),
                }))
              }
            />

            {/* Senha */}
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={formLogin.password}
              onChange={(e) =>
                setFormLogin((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>

          {/* Mostrar senha */}
          <div className="flex gap-2 items-center mt-2 ">
            <Checkbox
              checked={showPassword}
              onCheckedChange={() => setShowPassword(!showPassword)}
            />
            <Label>Mostrar Senha</Label>
          </div>
        </article>

        <footer className="flex flex-col mt-2 w-full p-4 gap-4">
          <Button onClick={() => {!formLogin.validEmail?alert("email invalido") : 
            // colocar lógica para busca
            alert("enviado")
          }}>Enviar</Button>
          <p className="text-center flex justify-center">
            Esqueceu a senha? Clique aqui!
          </p>
        </footer>
      </>
    )
  }

  export default Field