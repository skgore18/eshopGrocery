package com.app.dto;

import java.util.List;

import com.app.pojos.Order;
import com.app.pojos.OrderDetail;
import com.app.pojos.Payment;

public class OrderResponse {
	private Order order;
	private List<OrderDetail> orderDetails;
	private Payment payment;
	
	public OrderResponse() {
	}

	public OrderResponse(Order order, List<OrderDetail> orderDetails, Payment payment) {
		super();
		this.order = order;
		this.orderDetails = orderDetails;
		this.payment = payment;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public List<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}
}
