import React, { PureComponent } from "react";
import "./CheckoutProgress.styles.scss";

export class CheckoutProgress extends PureComponent {
  render() {
    const { steps } = this.props;
    return (
      <div className="progress">
        <div className="stepWrapper">
          {steps.map((item, index) => (
            <div className="stepBlock">
              <div className="circleWrapper">
                <div className="circle">{index + 1}</div>
              </div>
              <span>{item[1].title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CheckoutProgress;
