
import  {useState,useEffect} from 'react'

const Ragister =()=>{

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> this is useState part
  const [active, setActive] = useState(false)

  const [FullName1,setFullName1]= useState({
    fuser: "",
  });
  const [FullName2,setFullName2]= useState({
    uname: "",
  });
  const [FullEmail,setFullEmail]= useState({
    email: "",
  });
  
  const [FullNumber,setFullNumber]= useState({
    number: "",
  });
  const [FullCheck,setFullCheck]= useState({
   check : "",
  });
  const [error,setError] = useState("");
  const [error1,setError1] = useState("");
  const [error2,setError2] = useState("");
  const [error3,setError3] = useState("");


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> this was useState part


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>this is  Button event part
  const handleOnName=(event)=>{
    // console.log(event.target.value);
    setFullName1(event.target.value);
  };
  const handleOnUname=(event)=>{
    // console.log(event.target.value);
    setFullName2(event.target.value);
  };
  const handleOnEmail=(event)=>{
    // console.log(event.target.value);
    setFullEmail(event.target.value);
  };
  const handleOnNumber=(event)=>{
    // console.log(event.target.value);
    setFullNumber(event.target.value);
  };
  const handleONCheck=(event)=>{
    // console.log(event.target.value);
    setFullCheck(event.target.value);
    
  };
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> this was of Button event part


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>this is  isFromSubmit part
  const isFromSubmit =()=>{
    for (const value in FullName1) {
        if(FullName1[value].length===0){
            return false
        }
    }
    for (const value in FullName2) {
      if(FullName2[value].length===0){
          return false
      }
  }
    for (const value in FullEmail) {
      if(FullEmail[value].length===0){
          return false
      }
  }
  for (const value in FullNumber) {
    if(FullNumber[value].length===0){
        return false
    }
}
for (const value in FullCheck) {
  if(FullCheck[value].length===0){
      return false
  }
}
    return true
  }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> isFromSubmit part


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> useEffect part
    useEffect(()=>{
      if(FullName1.length>0 && isFromSubmit()){
          setActive(true)
        } 
        else if(FullName2.length>0 && isFromSubmit()){
          setActive(true)
        } 
        else if(FullEmail.length>0 && isFromSubmit()){
          setActive(true)
      }
      else if(FullNumber.length>0 && isFromSubmit()){
        setActive(true)
      }
      else if(FullCheck.length>0 && isFromSubmit()){
        setActive(true)
      }
      },)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>useEffect part
     const handleOnSubmit=(e)=>{
      e.preventDefault();
      // if(FullName1.fname===0 || FullName2.Uname===0 || FullEmail.email===0 || FullNumber.number===0){
      //   setError(true)
      // }
      console.log(" Name : ",FullName1,", ","Username : ",FullName2,", " ,"Email : ",FullEmail,", " ,"Mobile number : ",FullNumber,)
     }
     const handleOnSignUp=()=>{

      if(FullName1.length===0){
        setError("Name can't be empty");
      }
      else if(FullName2.length===0){
        setError1("username can't be empty");
      }
      else if(FullEmail.length===0){
        setError2("Email can't be empty");
      }
      else if(FullNumber.length<10){
        setError3("mobile Number can't be less than 10 digit");
      }
      else{
        alert("Congrats ! Your form has been submitted successfully")
        setError(null);
        setError1(null);
        setError2(null);
        setError3(null);

      }
     }
     



  return (
    <div>
      <>
      <div className="right">
        <h2 className='title'>Super app</h2>
        <a className='newAcc' href=''>Create your new account</a>
        <a className='email' href='https://i2.wp.com/tecvase.com/wp-content/uploads/2020/04/Gmail-Email-Login-Access-Your-Gmail-Account.jpg?fit=1102%2C738&ssl=1'>Email |</a>
        <a className='google' href='https://www.nudgify.com/docs/wp-content/uploads/2020/07/google-signup-login.jpg'>Google</a>
        <form className="input" onSubmit={handleOnSubmit}>

      <input type='text' className='fname'  placeholder='Enter Your Name'name='fname' value={FullName1.fname} onChange={handleOnName} size={30}/><br/><br/>
      
      <label className='label1'>{error}</label><br/>

      <input type='text' className='uname' placeholder='Enter Your  UserName'name='uname'value={FullName2.uname} onChange={handleOnUname} size={30}/><br/><br/>
      
      <label className='label2'>{error1}</label><br/>

      <input type='email' className='email2' placeholder='Enter Your Email'size={30} name='email' value={FullEmail.email} onChange={handleOnEmail} /><br/><br/>
      <label className='label3'>{error2}</label><br/>

      <input type='text' className='number' placeholder='91+ Enter Your Number' maxLength='10' name='number' value={FullNumber.number} onChange={handleOnNumber} size={30}/><br/>
      <label className='label4'>{error3}</label><br/>

      <input type='checkbox' className='checkbox' name='check' value={FullCheck.check} onChange={handleONCheck}/>
      <div className="portion">

      <p className='checkboxText'>Share my registration data with Superapp</p><br/>
      {active?<button className='btn2-active'  onClick={handleOnSignUp} >Sign up</button>:<button className='btn2'>Sign up</button>}
      <p className='text1'>By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
      <p className='text2'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>
      </div>
        </form>
      </div>
      </>
    </div>
  )
}

export default Ragister

