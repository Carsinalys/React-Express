import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ModalBuilder from "./pizzaBuilderModal";

import Ingredients from "../pizzaBuilder/pizzaBuilderIconsIngredients";
import { multipleAdd, getBuilds } from "../../AC/index";
import Modal from "../hoc/modal";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";

class Builds extends React.Component {
  componentDidMount() {
    this.handleScroll();
    document.addEventListener("scroll", this.handleScroll);
    this.props.getBuildsFun();
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.builds.builds.length !== this.props.builds.builds.length) {
      this.handleScroll();
    }
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
        <Modal toggle={this.props.builds.isLoading}>
          <Spinner />
        </Modal>
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
        {this.props.builds.builds.length > 0 ? (
          this.props.builds.builds.map(item => {
            return (
              <div key={item.name} className="ready__build__cover">
                <h3 className="builds__pizza__title__text">
                  <span className="builds__pizza__title">{item.name}</span>
                </h3>
                <div className="ready__build__single__pic">
                  <img src={`assets/img/${item.name}.png`} alt={item.name} />
                </div>
                <div className="single__build__ingredients__cover">
                  <Ingredients
                    ingredients={item.ingredients}
                    minus={this.minusHandler}
                    showCross="false"
                  />
                </div>
                <div className="single__build__params__cover">
                  <p>Weigth is: {[item].weight}g.</p>
                  <p>Cost is: {[item].cost}$</p>
                  <p>Diameter is: {[item].diameter}cm.</p>
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
          })
        ) : (
          <h1>No builds yet</h1>
        )}
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
    addFun: data => dispatch(multipleAdd(data)),
    getBuildsFun: () => dispatch(getBuilds())
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Builds);
