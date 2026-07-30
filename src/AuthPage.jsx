import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const AuthPage=()=>{


const navigate=useNavigate();


const API="https://desh-transport-backend.onrender.com/api/drivers";


const [login,setLogin]=useState(true);


const [form,setForm]=useState({

driverName:"",
phone:"",
password:"",
truckType:"",
truckCapacity:"",
vehicleBody:"covered"

});





const submit=async(e)=>{

e.preventDefault();


try{


if(login){



const res=await axios.post(`${API}/login`,{

phone:form.phone,

password:form.password

});




// Token Save

localStorage.setItem(
"driverToken",
res.data.token
);




// Full Driver Save

localStorage.setItem(
"driver",
JSON.stringify(res.data.driver)
);




// Trip apply এর জন্য

localStorage.setItem(
"driverId",
res.data.driver._id
);


localStorage.setItem(
"driverName",
res.data.driver.driverName
);


localStorage.setItem(
"driverPhone",
res.data.driver.phone
);




alert("লগইন সফল হয়েছে");


navigate("/driver");


}




else{



await axios.post(`${API}/signup`,{


driverName:form.driverName,


phone:form.phone,


password:form.password,


truckType:form.truckType,


truckCapacity:Number(form.truckCapacity),


vehicleBody:form.vehicleBody



});




alert(
"রেজিস্ট্রেশন সফল হয়েছে, এখন লগইন করুন"
);



setLogin(true);



}



}


catch(err){


alert(

err.response?.data?.message ||

"সমস্যা হয়েছে"

);


}



};










return(

<div style={{

minHeight:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

background:"#f1f5f9",

fontFamily:"sans-serif"

}}>





<div style={{


background:"white",

padding:"30px",

width:"380px",

borderRadius:"15px",

boxShadow:"0 10px 30px #ccc"


}}>





<h2 style={{

textAlign:"center",

color:"#0f2957"

}}>



{

login ?

"👤 ড্রাইভার লগইন"

:

"🚚 ড্রাইভার রেজিস্ট্রেশন"

}


</h2>








<form

onSubmit={submit}

style={{

display:"flex",

flexDirection:"column",

gap:"12px"

}}

>





{!login &&

<>



<input

placeholder="চালকের নাম"

value={form.driverName}

onChange={e=>

setForm({

...form,

driverName:e.target.value

})

}

required

/>







<select


value={form.truckType}


onChange={e=>

setForm({

...form,

truckType:e.target.value

})

}


required


>


<option value="">

গাড়ির ধরন নির্বাচন করুন

</option>



<option value="পিকআপ">

পিকআপ

</option>




<option value="কভার্ড ভ্যান">

কভার্ড ভ্যান

</option>




<option value="ট্রাক">

ট্রাক

</option>




<option value="ট্রেইলার">

ট্রেইলার

</option>



</select>









<input

type="number"

placeholder="গাড়ি কত টন"

value={form.truckCapacity}

onChange={e=>

setForm({

...form,

truckCapacity:e.target.value

})

}

required

/>








<select


value={form.vehicleBody}


onChange={e=>

setForm({

...form,

vehicleBody:e.target.value

})

}

>


<option value="covered">

কভার্ড ভ্যান

</option>



<option value="open">

খোলা ট্রাক

</option>


</select>




</>

}








<input

placeholder="মোবাইল নাম্বার"


value={form.phone}


onChange={e=>

setForm({

...form,

phone:e.target.value

})

}


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


required

/>








<button

style={{


background:"#14b8a6",

color:"white",

padding:"12px",

border:"none",

borderRadius:"8px",

fontWeight:"bold",

cursor:"pointer"


}}

>



{

login ?

"লগইন করুন"

:

"রেজিস্ট্রেশন করুন"

}


</button>





</form>









<button


onClick={()=>setLogin(!login)}


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



{

login ?

"নতুন অ্যাকাউন্ট তৈরি করুন"

:

"আগের অ্যাকাউন্টে লগইন করুন"

}



</button>




</div>



</div>

);


};



export default AuthPage;