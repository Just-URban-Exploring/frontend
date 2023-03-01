import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Registration.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Jure from "../assets/JURE-Logo.svg"
// import connection from "../connection.json"


export function Registration() {

  const [profilname, setProfilname] = useState("");
  const [stadt, setStadt] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [register, setRegister] = useState(false);
  const configuration = {
    method: "post",
    url: "https://backend-rho-nine.vercel.app/users/registration",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
    data: {
      profilname,
      stadt,
      email,
      password,
    },
  };
  
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // fetch data
    axios(configuration)
      .then((result) => {
        setRegister(true);
        console.log(result);
        navigate("/icons");
      })
      .catch((error) => {
        console.log(error)
      });
      setMatchPwd("");
      setEmail("");
      setPassword("");
      setProfilname("");
      setStadt("");
    // make a popup alert showing the "submitted" text
    // alert("Submited");
  };

  const navigate = useNavigate();

  return (
    <div className={styles.containerStyle}>
      <h1 className={styles.register}>Registrierung</h1>
      <img src={Jure} alt="Logo" />
      <div className={styles.buttonContainer}>
      <button id={styles.home} onClick={() => navigate("/")}>Home</button>
      </div>
      <Box
        className={styles.card}
        component={styles.form}
        sx={{
          "& .MuiTextField-root": { mt: 2 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* <form action="" className="mt-4" > */}
        {/* Profilname */}
        <div className={styles.divTextField}>
          <TextField
            htmlFor="profilname"
            name="profilname"
            type="text"
            id="profilname"
            label="Profilname"
            fullWidth
            className={styles.forminput}
            value={profilname}
            onChange={(e) => setProfilname(e.target.value)}
          ></TextField>

        {/* Stadt */}
          <TextField
            htmlFor="stadt"
            name="stadt"
            type="text"
            id="stadt"
            label="Stadt"
            fullWidth
            className={styles.forminput}
            value={stadt}
            onChange={(e) => setStadt(e.target.value)}
          ></TextField>
        {/* E-Mail */}
          <TextField
            htmlFor="email"
            name="email"
            type="email"
            id="email"
            label="E-Mail"
            fullWidth
            className={styles.forminput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            htmlFor="password"
            name="password"
            type="password"
            id="password"
            label="Password"
            fullWidth
            className={styles.forminput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <TextField
            htmlFor="passwortwiederholen"
            type="password"
            id="passwortwiederholen"
            label="Passwort wiederholen"
            fullWidth
            className={styles.forminput}
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
          ></TextField>
        </div>

        {/* A V A T A R */}

        {/* A U D I O G U I D E */}

        {/* A B O N N E M E N T  A U S W Ä H L E N */}

        {/* P A Y P A L */}

        <div className={styles.agb}>
          <pre>Mit dem Klick auf den “Jetzt registrieren!” Button erlaube ich dieser
          App den Zugriff auf meinen Standort. Ich stimme den<a className={styles.alink} href="/agb" target="_blank">AGB</a> und<a className={styles.alink} href="/datenschutz" target="_blank">Datenschutzrichtlinien</a> zu.</pre>
        {/* "R E G I S T R I E R E N" - B U T T O N  */}
          <button
            className={styles.btnprimary}
            type="submit"
            disabled={password !== matchPwd ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Jetzt Registrieren!
          </button>
        </div>
      </Box>
    </div>
  );
}
