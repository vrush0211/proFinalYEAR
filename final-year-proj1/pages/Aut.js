import React from "react";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from "./Firebase";
import { Button, Input } from "antd";
import { useRouter } from "next/router";

export default function Auth(){

    
    
    //this is html which is shown to client
    return(<>
        <Button>Login</Button>
        <Button>Signup</Button>
        <SignUp css={"block"} />

    </>)
}

export function SignUp(){
    const router = useRouter() 
    const [state , setState] = React.useState({
        Email:"" , Password:""
    })
    return(<>
    <div className="container" style={{display:"none"}}></div>
        <Input placeholder="Email" onChange={(e)=>{
        console.log(e)
        setState({...state ,Email:e })
      }}/>
       <Input placeholder="Password" onChange={(e)=>{
        console.log(e)
        setState({...state ,Password:e })

      }}/>

<Button onClick={async()=>{
    try{
        if(state.Email === "" || state.Password === "") {
            alert("enter email and password")
        }else{
            const data = await createUserWithEmailAndPassword(auth , state.Email , state.Password)
        console.log(data)
        router.push("Teacher")

        }
        
    }catch(err){
        console.log(err)
    }
    
}} >
    Login
</Button>


    </>)
}


export function Login(){
   //this is router object,helps to go to other pages,
   const router = useRouter()
   //this is state,it will kep track of email's and paswords valuw
   const [state , setState] = React.useState({
       Email:"" , Password:""
   })
   //this is html which is shown to client
   return(<>
       <Input placeholder="Email" onChange={(e)=>{
       console.log(e)
       setState({...state ,Email:e })
     }}/>
      <Input placeholder="Password" onChange={(e)=>{
       console.log(e)
       setState({...state ,Password:e })

     }}/>

<Button onClick={async()=>{
   //it will try this or catch the error
   try{
       if(state.Email === "" || state.Password === "") {
           alert("enter email and password")
       }else{
           //api call is made to firebase to signin the user,auth objecct email and password s sent
            const data = await signInWithEmailAndPassword(auth , state.Email , state.Password)
       console.log(data)

       router.push("Teacher")

              }
       
   }catch(err){
       console.log(err)
       setState({
           Email:"" , Password:""
       })
   }
   
}} >
   Login
</Button>


   </>)
}