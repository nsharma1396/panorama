import "aframe";
import { Entity, Scene } from "aframe-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCurrentState } from "../../actions/";
import playSound from "../../assets/Click2.mp3";

class Fetch extends Component {
  handleClick = index => {
    this.props.changeCurrentState(index);
  };

  render() {
    const { data, status, currentImageIndex } = this.props;
    if (status === "loading")
      return (
        <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          LOADING....
        </h1>
      );
    else if (status === "error")
      return (
        <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          ERROR 404 !!!
        </h1>
      );
    else
      return (
        <Scene>
          <a-assets>
            <audio id="click-sound" crossOrigin="anonymous" src={playSound}></audio>
          </a-assets>
          {data.map((elem, index) => {
            if (currentImageIndex === index)
              return (
                <Entity
                  key={index}
                  primitive="a-sky"
                  position="2 2 -3"
                  src={
                    "https://raw.githubusercontent.com/SiDevesh/PanoGallery/gh-pages/VR/" +
                    currentImageIndex +
                    // "https://nsharma1396.github.io/data-serve/" +
                    // data[currentImageIndex].file +
                    ".jpg"
                  }
                />
              );
            else return null;
          })}
          <Entity layout={{ type: "line", margin: 1.5 }}>
            {data.map((elem, ind) => {
              if (currentImageIndex === ind) {
                return (
                  <Entity
                    key={ind}
                    primitive="a-plane"
                    events={{
                      click: () => {
                        this.handleClick(ind);
                      }
                    }}
                    sound="on: click; src: #click-sound"
                    src={
                      "https://raw.githubusercontent.com/SiDevesh/PanoGallery/gh-pages/VR/" +
                      ind +
                      ".jpg"
                    }
                    position={{ x: -2 + 1.5 * ind, y: 2.5, z: -3.5 }}
                  />
                );
              } else {
                return (
                  <Entity
                    key={ind}
                    primitive="a-plane"
                    events={{
                      click: () => {
                        this.handleClick(ind);
                      }
                    }}
                    sound="on: click; src: #click-sound"
                    src={
                      "https://raw.githubusercontent.com/SiDevesh/PanoGallery/gh-pages/VR/" +
                      ind +
                      ".jpg"
                    }
                    position={{ x: -2 + 1.5 * ind, y: 2, z: -4 }}
                  />
                );
              }
            })}
            {data.map((elem, ind) => {
              if (currentImageIndex === ind) {
                return (
                  <Entity
                    text={{ value: elem.name, width: 5, color: "#0ff" }}
                    position="2.5 3 -2"
                  />
                );
              } else {
                return null;
              }
            })}
            <Entity
              text={{ value: "Picture " + (currentImageIndex + 1) + ": ", width: 5, color: "#0ff" }}
              position="1.5 3 -2"
            ></Entity>
          </Entity>
          <Entity primitive="a-camera">
            <Entity primitive="a-cursor" color="#fff" />
          </Entity>
        </Scene>
      );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    status: state.status,
    currentImageIndex: state.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentState: index => dispatch(changeCurrentState(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);
