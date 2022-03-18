/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+1+'.'+ d.getFullYear();
let data =document.getElementById('data');
let temp =document.getElementById('temp');
let content =document.getElementById('content');
// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&zip=';
const apiKey = '1e18aca09ca71adeca04413a70033e84';
console.log("hope");
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', actionTODo);
/* Function called by event listener */
function actionTODo(){
    const zip=  document.getElementById('zip').value;
    const feeling =  document.getElementById('feelings').value;
    const adress=baseURL+zip+',&appid='+apiKey;
    getData(zip,apiKey).then((data)=>{
      
      postData('http://localhost:5500/add',{temperature: data.main.temp, date: newDate, userResponse: feeling })
      .then(()=> {
        UserInter()
    })
    })
  
  }
/* Function to GET Web API Data*/
const getData = async (zip,apiKey)=>{
    try {
        const res = await fetch(baseURL+zip+',&appid='+apiKey);
        const data = await res.json();
        return data;
      }  catch(error) {
        console.log("error", error);
        // handling the error
      }
    }
    

/* Function to POST data */
const postData = async ( url = '', sentData = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify(sentData),       
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};
/* Function to GET Project Data */
const UserInter = async()=>{
    const res =await fetch('http://localhost:5500/all');
    try{
        const data=await res.json();
        document.getElementById("date").innerHTML=data.date;
        document.getElementById("content").innerHTML=data.userResponse;
        document.getElementById("temp").innerHTML=data.temperature;
    }
    catch(error)
    {
        console.log(error);
    }
};