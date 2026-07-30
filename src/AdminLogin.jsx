import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const AdminLogin=()=>{


const navigate=useNavigate();


const [form,setForm]=useState({

phone:"",
password:""

});




const login=async(e)=>{

e.preventDefault();


try{


const res=await axios.post(

"https://desh-transport-backend.onrender.com/api/admin/login",

{

phone:form.phone,

password:form.password

}

);



localStorage.setItem(

"adminToken",

res.data.token

);



alert("এডমিন লগইন সফল হয়েছে");


navigate("/admin");



}catch(error){


alert(

error.response?.data?.message ||

"এডমিন তথ্য ভুল হয়েছে"

);


}



};







return(

<div style={{

minHeight:"100vh",

background:"#f1f5f9",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontFamily:"sans-serif"

}}>



<div style={{

background:"white",

width:"420px",

padding:"35px",

borderRadius:"20px",

boxShadow:"0 15px 40px rgba(0,0,0,.1)"

}}>





<h1 style={{

textAlign:"center",

color:"#0f2957"

}}>

🔐 এডমিন লগইন

</h1>





<form

onSubmit={login}

style={{

display:"flex",

flexDirection:"column",

gap:"15px"

}}

>



<input

placeholder="এডমিন মোবাইল নাম্বার"

value={form.phone}

onChange={e=>

setForm({

...form,

phone:e.target.value

})

}

style={{

padding:"12px",

fontSize:"16px"

}}

required

/>





<input

type="password"

placeholder="পাসওয়ার্ড"

value={form.password}

onChange={e=>

setForm({

...form,

password:e.target.value

})

}

style={{

padding:"12px",

fontSize:"16px"

}}

required

/>






<button

style={{

background:"#ef4444",

color:"white",

padding:"14px",

border:"none",

borderRadius:"10px",

fontWeight:"bold",

fontSize:"17px",

cursor:"pointer"

}}

>

লগইন করুন

</button>



</form>






<button

onClick={()=>navigate("/")}

style={{

marginTop:"20px",

width:"100%",

background:"none",

border:"none",

color:"#0f2957",

fontWeight:"bold",

cursor:"pointer"

}}

>

🏠 হোম পেজে ফিরুন

</button>




</div>


</div>


);


};



export default AdminLogin;