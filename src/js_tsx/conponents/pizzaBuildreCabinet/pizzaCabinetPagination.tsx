import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";


interface Props extends RouteComponentProps<any> {
  num: number;
  page: number;
  changePage: React.Dispatch<React.SetStateAction<number>>;
  viewOrders: (query: string) => any;
  id: string | null;
}

const pagination: React.FunctionComponent<Props> = props => {
  let arr = [];
  for (let i = 0; i < props.num; i++) {
    arr.push(i + 1);
  }
  return (
    <div className="pizza__cabinet__pagination__list__cover">
      <ul className="pizza__cabinet__pagination__list">
        {arr.map((item, index) => (
          <li
            key={item}
            className={
              props.page == item
                ? "pizza__cabinet__pagination__item pizza__cabinet__pagination__item_active"
                : "pizza__cabinet__pagination__item"
            }
            onClick={() => {
              props.changePage(item);
              props.viewOrders(`page=${index + 1}&limit=4&id=${props.id}`);
              props.history.push(`/personalRoom/${index + 1}`);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(pagination);
