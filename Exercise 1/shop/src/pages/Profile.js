import React from 'react'

export const Profile = () => {
  return (
    <>
        <form
      style={{
        'padding-left': '500px',
        'padding-top': '150px',
        'padding-right': '500px',
        'padding-bottom': '12px',
      }}>
      <div className="mb-3">
        <h1 style={{'text-align': 'center'}}><b>My Account</b></h1>
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value="Priyanshu"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value="abc@gmail.com"
        />
      </div>
      <div className="mb-3">
        <label for="mobile_phone" className="form-label">Mobile</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          value="8126793953"
        />
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value="abc@gmail.com"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
