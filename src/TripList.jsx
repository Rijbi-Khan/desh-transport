import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const TripList=()=>{


const navigate=useNavigate();


const API="https://desh-transport-backend.onrender.com/api/trips";


const [trips,setTrips]=useState([]);

const [loading,setLoading]=useState(true);




useEffect(()=>{

loadTrips();

},[]);





const loadTrips=async()=>{


try{


const res=
await axios.get(
`${API}/active`
);


setTrips(res.data);


}


catch(err){

console.log(err);

}


finally{

setLoading(false);

}


};









const takeTrip=(tripId)=>{



const token=
localStorage.getItem("driverToken");



const driverData=
localStorage.getItem("driver");




// LOGIN CHECK FIRST

if(!token || !driverData){



alert(
"🚚 এই ট্রিপটি নিতে হলে প্রথমে ফোন নাম্বার ও পাসওয়ার্ড দিয়ে ড্রাইভার লগইন করুন"
);



navigate("/login");



return;


}




const driver=
JSON.parse(driverData);





if(!driver._id){


alert(
"ড্রাইভার তথ্য পাওয়া যায়নি, আবার লগইন করুন"
);


localStorage.clear();


navigate("/login");


return;


}






if(!navigator.geolocation){



alert(
"আপনার ডিভাইসে GPS সাপোর্ট নেই"
);



return;


}






navigator.geolocation.getCurrentPosition(



async(position)=>{



try{



await axios.post(


`${API}/apply-trip`,


{


tripId,


driverId:driver._id,


currentLocation:{


lat:
position.coords.latitude,


lng:
position.coords.longitude,


updatedAt:
new Date()


}



}


);




alert(
"✅ আপনার অনুরোধ এডমিন প্যানেলে পাঠানো হয়েছে"
);




loadTrips();




}



catch(error){



alert(

error.response?.data?.message ||

"ট্রিপ নেওয়া যায়নি"


);



}



},






()=>{



alert(
"📍 ট্রিপ নিতে হলে লোকেশন পারমিশন দিতে হবে"
);



}



);



};









return(

<div style={{

minHeight:"100vh",

background:"#f1f5f9",

padding:"25px",

fontFamily:"sans-serif"

}}>






<div style={{

display:"flex",

justifyContent:"space-between",

marginBottom:"25px"

}}>



<h2>

🚚 আজকের চলমান ট্রিপগুলো

</h2>




<button

onClick={()=>navigate("/")}

>

🏠 হোম

</button>



</div>






{loading &&

<p>লোড হচ্ছে...</p>

}





{!loading && trips.length===0 &&


<h3>

বর্তমানে কোনো ট্রিপ নেই

</h3>


}







<div style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",

gap:"20px"

}}>






{trips.map(trip=>(



<div

key={trip._id}

style={{


background:"white",

padding:"20px",

borderRadius:"12px",

boxShadow:
"0 5px 15px #ddd"


}}

>




<h3>

📍 {trip.from} ➜ {trip.to}

</h3>




<p>

📦 মালামাল: {trip.cargoDetails}

</p>




<p>

🚚 গাড়ি:

{

trip.requiredVehicleBody==="covered"

?

" কভার্ড ভ্যান"

:

" খোলা ট্রাক"

}

</p>






<p>

⚖️ ধারণক্ষমতা:

 {trip.requiredCapacity} টন

</p>





<p>

⏰ সময়: {trip.pickupTime}

</p>






<h2 style={{

color:"#14b8a6"

}}>

৳ {trip.fixedPrice}

</h2>






<button


onClick={()=>takeTrip(trip._id)}


style={{


background:"#0f2957",

color:"white",

border:"none",

padding:"12px",

borderRadius:"8px",

cursor:"pointer"


}}

>


এই ট্রিপটি নিতে চাই


</button>





</div>



))}



</div>




</div>


);


};



export default TripList;