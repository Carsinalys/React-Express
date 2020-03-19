import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
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
  deleteOrder,
  setCabinetChangePhoto
} from "../../AC/index";
import { InitStateAuth } from '../../reducer/pizzaAuth';
import { Dispatch } from "redux";
import { ChangeUserInfoFields } from "../../interfaces/interfaces";
import { InitStateCabinet } from '../../reducer/pizzaCabinet';
import { InitStateCabinetSet } from '../../reducer/pizzaCabinetSet';
import { InitStateCabinetGet } from '../../reducer/pizzaCabinetGetOrders';

interface Props {
  auth: InitStateAuth;
  browser: {
    safari: boolean
  }
  cabinet: InitStateCabinet;
  cabinetSet: InitStateCabinetSet;
  cabinetGet: InitStateCabinetGet;
  getInfoFun: (id: string) => any;
  onInputFun: (eent: ChangeEvent) => {
    type: string;
    payload: any;
  }
  fetchDataFun: (data:ChangeUserInfoFields, allGood: boolean, id: string) => any;
  viewOrdersFun: (query: string) => any;
  deleteOrderfun: (id: string, localId: string) => any;
  setCabinetChangePhotoFun: (data: string, id: string) => any;
}

interface State {
  showingContent: number;
  trigger: boolean;
}

class PersonalRoom extends React.Component<Props,State> {
  componentDidMount() {
    this.props.getInfoFun(this.props.auth.localId!);
  }

  state = {
    showingContent: 1,
    trigger: false
  };

  sendDataHnadler = (event: Event) => {
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
      this.props.cabinetSet.allGood,
      this.props.auth.localId!
    );
  };

  changeContentHandler = (num: number) => {
    this.setState({ trigger: true });
    setTimeout(() => {
      this.setState({ showingContent: num, trigger: false });
    }, 280);
  };

  showModalHandler = (id: string) => {
    this.props.deleteOrderfun(id, this.props.auth.localId!);
  };

  render() {
    return (
      <section className="container">
        <Modal toggle={this.props.cabinet.modalShow}>
          <Spinner />
        </Modal>
        <div className="room__change__mail__cover">
          <NavLink to="/personalRoom/changeMail">
            <button className="room__change__mail">Change mail.</button>
          </NavLink>
        </div>
        {this.props.auth.isAuthindicated ? null : <Redirect to="/" />}
        <nav className="room__nav">
          <ul className="room__list">
            <li className="room__item">
              <NavLink
                to="/personalRoom"
                className="room__link"
                onClick={() => this.changeContentHandler(1)}
              >
                Info
              </NavLink>
            </li>
            <li className="room__item">
              <NavLink
                to="/personalRoom"
                className="room__link"
                onClick={() => this.changeContentHandler(2)}
              >
                Set my contacts
              </NavLink>
            </li>
            <li className="room__item">
              <NavLink
                to="/personalRoom/1"
                className="room__link"
                onClick={() => this.changeContentHandler(3)}
              >
                My orders
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className={
            this.state.trigger
              ? "room__output_cabinet hide"
              : "room__output_cabinet show"
          }
        >
          <div className="cabinet__user__cover">
            <div className="log__out__cover">
              <div className="log__out__name__block">
                <p className="cabinet__user__name">
                  {this.props.auth.name !== "null"
                    ? this.props.auth.name
                    : "user"}
                </p>
              </div>
              <div className="log__out__image__block">
                {this.props.auth.photo!.startsWith("data") ? (
                  <div
                    className="log__out__image__div"
                    style={{
                      backgroundImage: "url(" + this.props.auth.photo + ")"
                    }}
                  ></div>
                ) : (
                  <div
                    className="log__out__image__div"
                    style={{
                      backgroundImage:
                        "url(" + "/assets/users/" + this.props.auth.photo + ")"
                    }}
                  ></div>
                )}
              </div>
            </div>
          </div>
          {this.state.showingContent === 1 ? (
            <CabinetInfo info={this.props.cabinet} />
          ) : null}
          {this.state.showingContent === 2 ? (
            <CabinetSet
              inputs={this.props.cabinetSet.inputs}
              modal={this.props.cabinetSet.modalShow}
              onInput={this.props.onInputFun}
              check={this.sendDataHnadler}
              auth={this.props.auth}
              sendPhoto={this.props.setCabinetChangePhotoFun}
            />
          ) : null}
          {this.state.showingContent === 3 ? (
            <CabinetOrders
              viewOrders={this.props.viewOrdersFun}
              orders={this.props.cabinetGet}
              id={this.props.auth.localId}
              delete={this.showModalHandler}
              browser={this.props.browser}
            />
          ) : null}
        </div>
      </section>
    );
  }
}

const stateToProps = (state: any) => {
  return {
    auth: state.auth,
    cabinet: state.cabinet,
    cabinetSet: state.cabinetSet,
    cabinetGet: state.cabinetGetOrders,
    browser: state.browser
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    getInfoFun: (id: string) => dispatch(getInfo(id)),
    onInputFun: (event: ChangeEvent) => dispatch(setCabinetOnInput(event)),
    fetchDataFun: (data:ChangeUserInfoFields, allGood: boolean, id: string) =>
      dispatch(setCabinetFetchOrder(data, allGood, id)),
    viewOrdersFun: (query: string) => dispatch(viewOrdersCabinet(query)),
    deleteOrderfun: (id: string, localId: string) => dispatch(deleteOrder(id, localId)),
    setCabinetChangePhotoFun: (data: string, id: string) =>
      dispatch(setCabinetChangePhoto(data, id))
  };
};

export default connect(stateToProps, dispatchToProps)(PersonalRoom);
