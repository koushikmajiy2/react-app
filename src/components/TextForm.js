import React , {useState} from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
// const clearscr =()=>{
//   settext("")
// }

//     const lowercase = ()=>{
//         let lowecontext = text.toLowerCase();
//         settext(lowecontext)
//     }
    
// const upcase = ()=>{
//     let newtext = text.toUpperCase();
//     settext(newtext)
// }
// const handelonchange = (event)=>{
//    settext(event.target.value)
// }

//     const [text, settext] = useState('Enter your text');

  return (
    <>
    {/* <div>
      <form>
  <div className="form-group">
    <h1><label for="exampleFormControlTextarea1">{props.heading}</label></h1>
    <textarea className="form-control" value={text} onChange={handelonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
</form>
<div className="container my-4">
<button type="button" onClick={upcase} className="btn btn-primary mx-2 my-2">To Upper Case</button>
<button type="button" onClick={lowercase} className="btn btn-success  mx-2 my-2">TO lower case</button>
<button type="button" onClick={clearscr} className="btn btn-secondary  mx-2 my-2">Clear Screen</button>
</div>
    </div>

  <div className="container">
  <div className="alert alert-success" role="alert">
  <h5 className="alert-heading">Text Summary</h5>
  <p>Total Number Of Words is : {text.split(" ").length -1}</p>
  <p className="mb-0">Total Number of Words is : {text.length}</p>

  <hr/>
  <p className="mb-0">Time To Read The Text : {(text.split(" ").length -1) *0.088}</p>
</div>
<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Preview!</h4>
  <p>{text}</p>
</div>
  </div> */}

<div className="container my-5">

  <footer className="bg-light text-center text-white">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a
        className="btn btn-primary btn-floating m-1"
        style="background-color: #3b5998;"
        href="#!"
        role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style="background-color: #55acee;"
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style="background-color: #dd4b39;"
        href="#!"
        role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style="background-color: #ac2bac;"
        href="#!"
        role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style="background-color: #0082ca;"
        href="#!"
        role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>
      <a
        className="btn btn-primary btn-floating m-1"
        style="background-color: #333333;"
        href="#!"
        role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
  </div>

  <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
  
</div>

    </>
  )
}


TextForm.prototype = {
                       heading:PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading:'Enter Your Text',
}