        //ARRAY COM OS LOGINS
        let users = [
            {nome:"Rodrigo", senha:1234},
            {nome:"Fernanda", senha:4321},
            {nome:"João", senha:5678},
            {nome:"Maria", senha:8765}
            ]
        //FUNÇÕES
        function verificaLogin (nomeUsuario, senhaUsuario) {
            for (let i = 0; i < users.length; i++){
                if (users[i].nome === nomeUsuario && users[i].senha === senhaUsuario) {
                    return true
                }   
            } return false
        }

        //INTERAÇÕES COM USUÁRIO
        const frm = document.querySelector("form")
        const resp = document.querySelector("h3")

        frm.addEventListener("submit", (e) =>{
            e.preventDefault()

            let nomeUsuario = document.getElementById("nomeUsuario").value
            let senhaUsuario = parseInt(document.getElementById("usuarioSenha").value)

            let loginAprovado = verificaLogin(nomeUsuario, senhaUsuario)

            if (loginAprovado) {
                resp.innerText = "Login Aprovado!"
                window.location.href = "index2.html"
            } else {
                resp.style.color = "red"
                resp.innerText = "Usuário ou senha incorreta!"
            }

          

        })
