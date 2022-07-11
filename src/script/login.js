//ANIMAÇÃO CAIXAS DE LOGIN
document.querySelector("video").play()
const signUpButton = document.querySelector("#signUp")
    const signInButton = document.querySelector("#signIn")
    const container = document.querySelector("#container")

    signUpButton.addEventListener("click",()=>{
      container.classList.add("right-panel-active")
    })
    signInButton.addEventListener("click",()=>{
      container.classList.remove("right-panel-active")
    })

//ABRIR POPUP DE FOTO/ID USUÁRIO  
const OpensignUpPopup  = document.querySelector(".sign-up-container")
OpensignUpPopup.addEventListener("submit",(e)=>{
  e.preventDefault()
  const imageSelect = document.querySelector(".blur-photo")
  imageSelect.style.display ="flex"
})
const closeSignupPopup = document.querySelector(".close")
closeSignupPopup.addEventListener("click",()=>{
  const imageSelect = document.querySelector(".blur-photo")
  imageSelect.style.display ="none"
})



//LIMPAR INPUTS USUÁRIO
const signInClear = document.querySelector("#signUp")
signInClear.addEventListener("click",()=>{
  const inputSignIn = document.querySelectorAll(".sign-in-container form input")
  inputSignIn.forEach((item)=>{
    item.value = ""
  })
})
const signUpClear = document.querySelector("#signIn")
signUpClear.addEventListener("click",()=>{
  const inputSignIn = document.querySelectorAll(".sign-up-container form input")
  inputSignIn.forEach((item)=>{
    item.value = ""
  })
})

//ARMAZENAR E PEGAR DADOS NO LOCAL STORAGE
const signUpEnd = document.querySelector("#signUp-end")
signUpEnd.addEventListener("submit",()=>{

  const nome = document.querySelector(`.sign-up-container form [name="nome"]`).value
  const email = document.querySelector(`.sign-up-container form [name="email"]`).value
  const senha = document.querySelector(`.sign-up-container form [name="senha"]`).value
  const photo = document.querySelector("#signUp-end #img").value
  const idUser = document.querySelector(".user-id input").value
  
  localStorage.setItem(`@SigmaSocial-nome:${email}`,nome)
  localStorage.setItem(`@SigmaSocial-email:${email}`,email)
  localStorage.setItem(`@SigmaSocial-senha:${email}`,senha)
  localStorage.setItem(`@SigmaSocial-photo:${email}`,photo)
  localStorage.setItem(`@SigmaSocial-senha:${email}`,senha)
  localStorage.setItem(`@SigmaSocial-id:${email}`,idUser)
  localStorage.setItem("@Sigma-login-email-now",email)

  const inputSignIn = document.querySelectorAll(".sign-up-container form input")
  inputSignIn.forEach((item)=>{
    item.value = ""
  })

  const imageSelect = document.querySelector(".blur-photo")
  imageSelect.style.display ="none"
  container.classList.remove("right-panel-active")
  setTimeout(() => {
    window.alert(`Conta criada com sucesso! Seja bem vindo(a) ${nome}!`)
  }, 150);
 
})

const loginUser = document.querySelector(".sign-In-user")
loginUser.addEventListener("submit", (e)=>{
  e.preventDefault()
  let userEmail = document.querySelector("#email-user").value
  let userPassword = document.querySelector("#password-user").value
  let emailValidation = localStorage.getItem(`@SigmaSocial-email:${userEmail}`)
  let passwordValidation = localStorage.getItem(`@SigmaSocial-senha:${userEmail}`)

  if(userEmail === emailValidation){
    if(userPassword === passwordValidation){
        localStorage.setItem("@Sigma-login-email-now",userEmail)
        window.location.href = "main.html"
        
    }
    else{
      window.alert("Senha incorreta!")
    }
  }
  else{
    window.alert("Este email não existe ou está incorreto.")
  }
})