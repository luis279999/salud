import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js" 
import { auth } from './firebase.js'
const signInForm = document.querySelector('#login-form')
//const boton=document.querySelector('button');
const boton=document.querySelector('button');


boton.addEventListener('click',async(e)=> {
    e.preventDefault()
    const contraseña = signInForm ['medico_Contraseña'].value
    const email= signInForm ['medico_Email'].value
    
    try {
    const Credentials = await signInWithEmailAndPassword(auth,email,contraseña)
    console.log(Credentials)
    console.log('Bienvenido'+ Credentials.user.email)
    location.href='medicoLogueado.html'
    }
    catch (error){
    //console.log(error)
    if(error.code==="auth/wrong-password"){
        //showMessage('Wrong passwrod', 'error')
        console.log('Contraseña incorrecta')
    } 
    else if(error.code==="auth/user-not-found")
    {
        //showMessage('User not found','error')
        console.log('Usuario no encontrado')

    } else
    {
        //showMessage('Error de capa 8','error')
        console.log('Error desconocido')
    }
    }
}) 

