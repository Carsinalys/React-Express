import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ModalBuilder from "./pizzaBuilderModal";

import Ingredients from "../pizzaBuilder/pizzaBuilderIconsIngredients";
import { multipleAdd } from "../../AC/index";
import Modal from "../hoc/modal";

class Builds extends React.Component {
  componentDidMount() {
    this.handleScroll();
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  state = {
    modalIsShow: false,
    selectedItem: "",
    redirect: false,
    minusModal: false
  };

  minusHandler = event => {
    this.setState({ minusModal: true });
  };

  toggleModalHandler = () => {
    this.setState({ modalIsShow: false });
  };

  redirectHandler = () => {
    this.setState({ redirect: true });
  };

  handleScroll = event => {
    const items = document.querySelectorAll(".ready__build__cover");
    const pics = document.querySelectorAll(".ready__build__single__pic");
    items.forEach((item, index) => {
      if (
        document.documentElement.scrollTop >=
        item.offsetTop - item.offsetHeight * 2
      ) {
        pics[index].classList.add("ready__build__single__pic_active");
      }
    });
  };

  render() {
    return (
      <section className="ready__builds__main__cover">
        {this.state.redirect ? <Redirect to="/checkout" /> : null}
        <Modal toggle={this.state.modalIsShow}>
          <div className="modal__background" onClick={this.toggleModalHandler}>
            <ModalBuilder
              add={this.props.addFun}
              redirect={this.redirectHandler}
              curPizza={this.state.selectedItem}
              builds={this.props.builds.builds}
            />
          </div>
        </Modal>
        <Modal toggle={this.state.minusModal}>
          <div
            className="modal__background"
            onClick={() => this.setState({ minusModal: false })}
          >
            <div className="info__modal__cover">
              <div className="info__modal__title">
                <h1 className="info__modal__title__text">
                  You can`t delete ingredients from ready builds, but you can
                  build your own pizza in pizza builder...
                </h1>
              </div>
            </div>
          </div>
        </Modal>
        {Object.keys(this.props.builds.builds).map(item => {
          return (
            <div key={item} className="ready__build__cover">
              <h3 className="builds__pizza__title__text">
                <span className="builds__pizza__title">{item}</span>
              </h3>
              <div className="ready__build__single__pic">
                <img src={`assets/img/${item}.png`} alt={item} />
              </div>
              <div className="single__build__ingredients__cover">
                <Ingredients
                  ingredients={this.props.builds.builds[item].ingredients}
                  minus={this.minusHandler}
                />
              </div>
              <div className="single__build__params__cover">
                <p>Weigth is: {this.props.builds.builds[item].weight}g.</p>
                <p>Cost is: {this.props.builds.builds[item].cost}$</p>
                <p>Diameter is: {this.props.builds.builds[item].diameter}cm.</p>
              </div>
              <div className="single__build__order__cover">
                <button
                  className="single__build__order"
                  onClick={() =>
                    this.setState({ modalIsShow: true, selectedItem: item })
                  }
                >
                  Order
                </button>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

const stateToProps = state => {
  return {
    builds: state.builds
  };
};

const dispatchToProps = dispatch => {
  return {
    addFun: data => dispatch(multipleAdd(data))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Builds);
