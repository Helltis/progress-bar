import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import CheckoutProgress from "Component/CheckoutProgress/CheckoutProgress.component.js";
import ContentWrapper from "Component/ContentWrapper";
import "./Checkout.extension.style";

class Checkout extends SourceCheckout {
  renderProgressBar() {
    const steps = Object.entries(this.stepMap);
    return <CheckoutProgress steps={steps} />;
  }

  render() {
    return (
      <main block="Checkout">
        {this.renderProgressBar()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
