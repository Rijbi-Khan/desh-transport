import React,{useEffect,useState} from "react";
import axios from "axios";


const DriverDashboard=()=>{


const API="https://desh-transport-backend.onrender.com/api/trips";


const [driver,setDriver]=useState(null);

const [tab,setTab]=useState("active");

const [trips,setTrips]=useState([]);

const [myTrips,setMyTrips]=useState([]);





useEffect(()=>{


const data =
localStorage.getItem("driver");


if(data){

const d = JSON.parse(data);

setDriver(d);

loadData(d.id);

}


},[]);







const loadData=async(driverId)=>{


try{


const active =
await axios.get(

`${API}/active`

);



setTrips(active.data);





const history =
await axios.get(

`${API}/history/last-7-days`

);




const mine = history.data.filter(

t =>

String(t.acceptedDriver.driverId)

===

String(driverId)

);



setMyTrips(mine);




}

catch(err){


console.log(err);


}



};









const applyTrip=(tripId)=>{


if(!driver){


alert("আগে লগইন করুন");

return;


}





if(!navigator.geolocation){


alert(

"আপনার ডিভাইসে লোকেশন নেই"

);

return;


}






navigator.geolocation.getCurrentPosition(


async(position)=>{


try{



await axios.post(

`${API}/apply-trip`,

{


tripId:tripId,


driverId:driver.id,


currentLocation:{


lat:
position.coords.latitude,


lng:
position.coords.longitude,


updatedAt:new Date()


}


}


);





alert(

"আপনার অনুরোধ এডমিনের কাছে পাঠানো হয়েছে"

);




loadData(driver.id);




}


catch(err){



alert(

err.response?.data?.message ||

"সমস্যা হয়েছে"

);



}



},



()=>{


alert(

"ট্রিপ নিতে লোকেশন অনুমতি দিতে হবে"

);


}



);



};









const logout=()=>{


localStorage.clear();


window.location.href="/";


};









return(

<div style={{

minHeight:"100vh",

background:"#f1f5f9",

padding:"25px",

fontFamily:"sans-serif"

}}>





<div style={{


background:"#0f2957",

color:"white",

padding:"20px",

borderRadius:"12px"


}}>




<h2>

স্বাগতম {driver?.driverName}

</h2>




<p>

🚚 {driver?.truckType}

</p>





<button onClick={logout}>

লগআউট

</button>




</div>








<div style={{

marginTop:"20px",

display:"flex",

gap:"10px"

}}>



<button

onClick={()=>setTab("active")}

>

আজকের চলমান ট্রিপ

</button>




<button

onClick={()=>setTab("mine")}

>

আপনার নেওয়া ট্রিপগুলো

</button>



</div>









{tab==="active" &&

<div>


<h2>

🚚 চলমান ট্রিপ

</h2>





{trips.map(t=>(


<div

key={t._id}


style={{


background:"white",

padding:"20px",

margin:"15px 0",

borderRadius:"10px"


}}

>




<h3>

{t.from} ➜ {t.to}

</h3>




<p>

মালামাল: {t.cargoDetails}

</p>



<p>

ভাড়া: {t.fixedPrice} টাকা

</p>





<button

onClick={()=>applyTrip(t._id)}

>

এই ট্রিপ নিতে চাই

</button>




</div>


))}



</div>

}










{tab==="mine" &&


<div>



<h2>

✅ আপনার নেওয়া ট্রিপ

</h2>





{myTrips.length===0 &&


<p>

এখনো কোনো ট্রিপ কনফার্ম হয়নি

</p>


}





{myTrips.map(t=>(


<div

key={t._id}


style={{


background:"white",

padding:"15px",

margin:"10px",

borderRadius:"10px"


}}

>




<h3>

{t.tripDetails.from}

 ➜ 

{t.tripDetails.to}


</h3>




<p>

ভাড়া:

 {t.tripDetails.fixedPrice}

 টাকা

</p>




<p>

তারিখ:

{

new Date(

t.completedAt

).toLocaleDateString()

}


</p>



</div>


))}



</div>


}





</div>

);


};



export default DriverDashboard;