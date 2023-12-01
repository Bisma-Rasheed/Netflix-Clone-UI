import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Signup = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(firebaseAuth, (authUser) => {
  //       setUser(authUser);
  //     });

  //     // Cleanup function to unsubscribe when the component unmounts
  //     return () => {
  //       unsubscribe();

  //       firebaseAuth
  //         .signOut()
  //         .then(() => {
  //           navigate("/");
  //         })
  //         .catch((error) => {
  //           console.error(
  //             "Error signing out on component unmount:",
  //             error.message
  //           );
  //         });
  //     };
  //   }, []);

  const handleRegistration = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  //   onAuthStateChanged(firebaseAuth, (currentUser) => {
  //     if (currentUser) {
  //       navigate("/dashboard");
  //     }
  //   });
  return (
    <>
      <Container>
        <BackgroundImage />
        <div className="content">
          <Header login />
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1>Unlimited movies, TV Shows and more</h1>
              <h4>Watch anywhere, Cancel Anytime</h4>
              <h6>
                Ready to watch? Enter your email address to create or restart
                membership
              </h6>
            </div>
            <div className="form">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}

              {!showPassword && (
                <button onClick={() => setShowPassword(true)}>
                  Get Started
                </button>
              )}
            </div>
            {showPassword && (
              <button onClick={handleRegistration}>Register</button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    padding-top: 5px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        color: white;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        width: 60%;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
export default Signup;
