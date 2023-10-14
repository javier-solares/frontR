export default function Login() {
  return (
    <div className="container">
      <div className="subcontainer">
        <img
          src="https://images.inc.com/uploaded_files/image/1920x1080/getty_487042276_195956.jpg"
          alt="hotel"
          width={"50%"}
          height={"100%"}
        />
        <div className="form_container">
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Contraseña</label>
          <input type="password" />
          <button className="loginbutton">Log in</button>
          <div className="subform">
            <h2>Sing Up</h2>
            <p>Log in with the date you entered during your registration.</p>
            <div className="containerbutton">
              <button>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
