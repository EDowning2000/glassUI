import React from "react"
import "./glass.css"

const Glass = () => {
  return (
    <>
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img src="./images/avatar.png" alt="User Image" />
              <h3>Emerson Downing</h3>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  )
}
export default Glass
