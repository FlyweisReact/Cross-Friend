import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { orderSuc } from "../Repository/Api";

const OrderSucces = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const updateHandler = () => {
    orderSuc(id, navigate);
  };

  useEffect(() => {
    updateHandler();
  }, [id]);

  return (
    <div class="payment-success-container">
      <div class="payment-success-content">
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        <p>Wait for few sec.</p>
      </div>
    </div>
  );
};

export default OrderSucces;
