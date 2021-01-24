import React from "react"
import "./glass.css"
import assassins from "../images/assassins.png"
import avatar from "../images/avatar.png"
import controller from "../images/controller.png"
import library from "../images/library.png"
import sackboy from "../images/sackboy.png"
import spiderman from "../images/spiderman.png"
import steam from "../images/steam.png"
import twitch from "../images/twitch.png"
import upcoming from "../images/upcoming.png"

const Glass = () => {
  return (
    <>
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img src={avatar} alt="User" />
              <h3>Emerson Downing</h3>
              <p>Pro Member</p>
            </div>
            <div className="links">
              <div className="link">
                <img src={twitch} alt="Stream" />
                <h2>Streams</h2>
              </div>

              <div className="link">
                <img src={steam} alt="Games" />
                <h2>Games</h2>
              </div>

              <div className="link">
                <img src={upcoming} alt="New" />
                <h2>New</h2>
              </div>
              <div className="link">
                <img src={library} alt="Library" />
                <h2>Library</h2>
              </div>
            </div>
            <div className="pro">
              <h2>Join Pro for free games</h2>
              <img src={controller} alt="Controller" />
            </div>
          </div>

          <div className="games">
            <div className="status">
              <h1>Active Games</h1>
              <input type="text" placeholder="Search Games" />
            </div>
            <div className="cards">
              <div className="card">
                <img src={assassins} alt="Assassins" />
                <div className="cardInfo">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>

              <div className="card">
                <img src={assassins} alt="Assassins" />
                <div className="cardInfo">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>

              <div className="card">
                <img src={assassins} alt="Assassins" />
                <div className="cardInfo">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>

              {/* <div className="card">
                <img src={assassins} alt="Assassins" />
                <div className="cardInfo">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div> */}
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
