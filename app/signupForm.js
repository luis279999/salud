import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js" 
import { auth } from "./firebase.js"
const signupForm = document.querySelector('#signup-form')
const boton=document.querySelector('button');

boton.addEventListener('click',async(e)=> {
    e.preventDefault()
    const email= signupForm ['registro_Email'].value
    const contraseña = signupForm ['registro_Contraseña'].value
    console.log(email,contraseña)
    try { 
    const userCredentials = await createUserWithEmailAndPassword(auth,email,contraseña)
    onclick="location.href='medicoSesion.html'"
    location.href='medicoSesion.html'

    }
    catch (error){
    console.log(error)
    }
}) 
