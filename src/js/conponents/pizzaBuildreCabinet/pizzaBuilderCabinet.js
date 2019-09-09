import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "../hoc/modal";

import CabinetInfo from "./pizzaBuilderCabinetInfo";
import CabinetSet from "./pizzaBuilderCabinetSet";
import CabinetOrders from "./pizzaCabinetOrders";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import {
  getInfo,
  setCabinetOnInput,
  setCabinetFetchOrder,
  viewOrdersCabinet,
  deleteOrder
} from "../../AC/index";

class PersonalRoom extends React.Component {
  componentDidMount() {
    this.props.getInfoFun(this.props.auth.localId);
  }

  state = {
    showingContent: 1,
    trigger: false
  };

  sendDataHnadler = event => {
    event.preventDefault();

    let data = {
      flat: this.props.cabinetSet.inputs.flat.value,
      house: this.props.cabinetSet.inputs.house.value,
      name: this.props.cabinetSet.inputs.name.value,
      street: this.props.cabinetSet.inputs.street.value,
      phone: this.props.cabinetSet.inputs.phone.value
    };

    this.props.fetchDataFun(
      data,
      this.props.auth.token,
      this.props.cabinetSet.allGood,
      this.props.auth.localId
    );
  };

  changeContentHandler = num => {
    this.setState({ trigger: true });
    setTimeout(() => {
      this.setState({ showingContent: num, trigger: false });
    }, 280);
  };

  showModalHandler = id => {
    this.props.deleteOrderfun(
      id,
      this.props.auth.token,
      this.props.auth.localId
    );
  };

  render() {
    return (
      <section className="container">
        <Modal toggle={this.props.cabinet.modalShow}>
          <Spinner />
        </Modal>
        {this.props.auth.isAuthindicated ? null : <Redirect to="/" />}
        <nav className="room__nav">
          <ul className="room__list">
            <li className="room__item">
              <a
                className="room__link"
                onClick={() => this.changeContentHandler(1)}
              >
                Info
              </a>
            </li>
            <li className="room__item">
              <a
                className="room__link"
                onClick={() => this.changeContentHandler(2)}
              >
                Set my contacts
              </a>
            </li>
            <li className="room__item">
              <a
                className="room__link"
                onClick={() => this.changeContentHandler(3)}
              >
                My orders
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={
            this.state.trigger ? "room__output hide" : "room__output show"
          }
        >
          {this.state.showingContent == 1 ? (
            <CabinetInfo info={this.props.cabinet} />
          ) : null}
          {this.state.showingContent == 2 ? (
            <CabinetSet
              inputs={this.props.cabinetSet.inputs}
              modal={this.props.cabinetSet.modalShow}
              onInput={this.props.onInputFun}
              check={this.sendDataHnadler}
            />
          ) : null}
          {this.state.showingContent == 3 ? (
            <CabinetOrders
              viewOrders={this.props.viewOrdersFun}
              orders={this.props.cabinetGet}
              token={this.props.auth.token}
              id={this.props.auth.localId}
              delete={this.showModalHandler}
            />
          ) : null}
        </div>
      </section>
    );
  }
}

const stateToProps = state => {
  return {
    auth: state.auth,
    cabinet: state.cabinet,
    cabinetSet: state.cabinetSet,
    cabinetGet: state.cabinetGetOrders
  };
};

const dispatchToProps = dispatch => {
  return {
    getInfoFun: id => dispatch(getInfo(id)),
    onInputFun: event => dispatch(setCabinetOnInput(event)),
    fetchDataFun: (data, token, allGood, id) =>
      dispatch(setCabinetFetchOrder(data, token, allGood, id)),
    viewOrdersFun: query => dispatch(viewOrdersCabinet(query)),
    deleteOrderfun: (id, token, userId) =>
      dispatch(deleteOrder(id, token, userId))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(PersonalRoom);
