import React, { useCallback, useEffect, useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLoanContext } from "../../context/LoanContext";
import axios from "../../helpers/axios";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { authenticator } from "otplib";
// import Modal from "react-modal";
// import CloseIcon from "@mui/icons-material/Close";
// import MoonLoader from "react-spinners/MoonLoader";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [pubAddr, setPubAddr] = useState("");
  const [sid, setSid] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const { registerStudent, getStudent } = useCVPContext();
  const { checkIfWalletConnected, currentAccount } = useAuth();
  const { addUser } = useLoanContext();

  // function closeModal() {
  //   setModalIsOpen(false);
  // }

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  // const fetchStudent = useCallback(async () => {
  //   try {
  //     const student = await getStudent();
  //     if (student) {
  //       navigate("/dashboard");
  //     }
  //   } catch (err) {
  //     toast.error(err);
  //     console.log(err);
  //   }
  // });

  useEffect(() => {
    // fetchStudent();
    setPubAddr(currentAccount);
  }, [currentAccount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    try {
      let email = ""
      await axios.post("/api/register", { name ,email, pubAddr }).then((res) => {
        toast.warn("Please wait sometime");
        console.log("res", res);
      });
      try {
        await addUser(name, pubAddr);
        toast.success("Registration successful");
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
        toast.error(err);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("OTP invalid");
      console.log("OTP error on frontend", err);
    }
    // try {
    //   setIsLoading(true);
    //   await axios.post("/register/otp", { otp }).then((res) => {
    //     toast.warn("Please wait sometime");
    //     console.log("res", res);
    //   });
    //   try {
    //     await registerStudent(name, email, pubAddr, mobileNo, sid);
    //     toast.success("Registration successful");
    //     navigate("/dashboard");
    //   } catch (err) {
    //     console.log(err);
    //     toast.error(err);
    //     setIsLoading(false);
    //     return;
    //   }
    // } catch (err) {
    //   setIsLoading(false);
    //   toast.error("OTP invalid");
    //   console.log("OTP error on frontend", err);
    // }
  };

  return (
    <>
      <ToastContainer />

      <div className={styles.registerPageContainer}>
        <form className={`${styles.formBox}`}>
          <h2 className={`${styles.heading}`}>Register</h2>

          <div className={`${styles.inputContainer}`}>
            <label className={`${styles.inputLabel}`}>Public Address</label>
            <input
              className={`${styles.input}`}
              type="text"
              placeholder="Enter public address"
              onChange={(e) => setPubAddr(e.target.value)}
              value={pubAddr}
            />
          </div>
          <div className={`${styles.inputContainer}`}>
            <label className={`${styles.inputLabel}`}>Name</label>
            <input
              className={`${styles.input}`}
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className={`${styles.inputContainer}`}>
            <label className={`${styles.inputLabel}`}>Unique ID</label>
            <input
              className={`${styles.input}`}
              type="text"
              name="id"
              placeholder="Enter your Unique ID(Aadhar ID)"
              onChange={(e) => setSid(e.target.value)}
              value={sid}
            />
          </div>

          <button className={styles.registerBtn} onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
