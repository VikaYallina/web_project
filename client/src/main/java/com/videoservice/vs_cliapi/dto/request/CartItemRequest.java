package com.videoservice.vs_cliapi.dto.request;

public class CartItemRequest {
    private Long productId;
    private String name;
    private Integer quantity;
    private Double price;

    public CartItemRequest(){

    }

    public CartItemRequest(Long productId, String name, Integer quantity, Double price) {
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;
        this.name = name;
    }


    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
