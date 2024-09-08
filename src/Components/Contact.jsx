import React from 'react';

const Contact = () => {
  return (
    <>
    <div className='container-fluid' style={{backgroundImage:"url('https://img.freepik.com/premium-vector/man-with-blue-shirt-blue-shirt-has-green-eyes_169196-13007.jpg')", backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
      <div className='account text-white'><h2 className='my text-center'>Contact</h2></div>
    </div>
      <div className='container-fluid bg-light p-3'>
        <div className='row'>
        <div className='col-sm-4 text-center'>
      <h1 className='mt-5'><i className='bi bi-headset bg-danger p-4 rounded-circle text-white'></i></h1>
        <p className='pt-4 text-danger'>SAY HELLO</p>
        <h3>Get in touch with us</h3>
        </div>
        </div>
        
        <div className='row mt-5'>
        <div className='col-2 mt-2 text-end'>
        <h3><i className='bi bi-phone bg-danger text-white p-3 rounded-circle'></i></h3>
        </div>
          <div className='col-10 text-start ps-4'>
          <p className='text-danger'>Call now</p>
           <h5>+2349061324918</h5>
          </div>
        </div>

        <div className='row mt-4'>
        <div className='col-2 mt-2 text-end'>
          <h3><i className='bi bi-chat bg-danger text-white p-3 rounded-circle'></i></h3>
        </div>
          <div className='col-10 text-start ps-4'>
          <p className='text-danger'>Our support mail</p>
            <h5>bankoleazeezb98@gmail</h5>
          </div>
        </div>

        <div className='row mt-4'>
        <div className='col-2 mt-2 text-end'>
        <h3><i className='bi bi-geo-alt bg-danger text-white p-3 rounded-circle'></i></h3>
        </div>
          <div className='col-10 ps-4'>
          <p className='text-danger'>Our Address</p>
            <h5>5, Secretariat, Iragbiji, Osun State, Nigeria.</h5>
          </div>
        </div>

        <div className='container mt-5' style={{backgroundImage:"url('https://skytechgeek.com/wp-content/uploads/2019/03/become-food-blogger.jpg')"}}>
        
          <div className=' bg-white opacity-75 text-danger' style={{marginLeft:'-12px', marginRight:'-12px'}}>
            <div className='p-3 pb-5'>
          <h2 className=' text-center pt-3'>Contact Us</h2>

              <form className='was-validated'>
                <div>
            <label htmlFor='name' className='form-label mt-2'>Name: (required)</label>
              <input type='text' id='name' className='form-control bg-danger text-white' placeholder='Enter your name' required />
                  <div className='valid-feedback'>Valid ✔️</div> <div className='invalid-feedback'>Please fill the field</div>
                </div>

                <div>
              <label htmlFor='email' className='form-label mt-3'>Email: (required)</label>
              <input type='email' id='email' className='form-control bg-danger text-white' placeholder='Enter your email' required />
                  <div className='valid-feedback'>Valid ✔️</div> <div className='invalid-feedback'>Please fill this field</div>
                </div>

                <div>
              <label htmlFor='message' className='form-label mt-3'>Message</label>
              <textarea id='message' className='form-control card-text bg-danger text-white' placeholder='Enter your message' rows='4' required></textarea>
                  <div className='valid-feedback'>Valid ✔️</div> <div className='invalid-feedback'>Please fill this field</div>
                </div>
                <button type='submit' className='btn mt-3 bg-danger text-white' onClick={(e) => {e.preventDefault()}}>Submit</button>
                 
              </form>
            </div>
           
          </div>
        </div>
        <div className='container-fluid'>
          <iframe className='border' height="400" src="https://www.openstreetmap.org/export/embed.html?bbox=4.652366638183595%2C7.872224168697813%2C4.71416473388672%2C7.927654677765275&amp;layer=mapnik" style={{ width:'100%'}}></iframe>
        </div>
      </div>
    </>
  )
}
export default Contact;