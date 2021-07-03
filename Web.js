// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2Zl-U62VdI97vEe0vPFHqN84BVX_lxBI",
    authDomain: "corona-website-7e117.firebaseapp.com",
    databaseURL: "https://corona-website-7e117-default-rtdb.firebaseio.com",
    projectId: "corona-website-7e117",
    storageBucket: "corona-website-7e117.appspot.com",
    messagingSenderId: "281492403582",
    appId: "1:281492403582:web:10be9a42f7fe0b90b12f2f",
    measurementId: "G-BWPJYDK36T"
  };
  firebase.initializeApp(firebaseConfig);
var userref = firebase.database().ref()
document.getElementById("For").addEventListener("submit",dr)
function dr(d){
  d.preventDefault()
  var name = document.getElementById("gh").value
  var nae = document.getElementById("kl").value
  var ame = document.getElementById("jk").value
  var nam = document.getElementById("is").value
  var nme = document.getElementById("wf").value
  var me = document.getElementById("pw").value
  var ne = document.querySelector("input[name=Thistory]:checked").value
  var nm = catfrom()
  sentTO(name,nae,ame,nam,nme,me,ne,nm)
  ResponseFro(me)
}
function catfrom(){
var al = document.querySelectorAll("input[type=checkbox]:checked")
var kd = []
al.forEach((a)=>{kd.push(a.value)} )
return kd  
}
function sentTO(name,email,Dob,occp,conIn,state,TrH,Symptom){
 var newref = userref.push()
 newref.set({name:name,email:email,occupation:occp,DOB:Dob,Location:state,ContactInfo:conIn,TravelHist:TrH,Symptoms:Symptom})
}
function ResponseFro(l){
 var gh 
 var r = firebase.database().ref(l)
 r.on("value",(a)=>{gh=a.val()
 document.getElementById("Locat").innerHTML="Testing Around Your Location Are : "+ gh})
}