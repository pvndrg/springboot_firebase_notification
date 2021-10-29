package com.example.demo.fcm.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class PushNotificationResponse {
	private int status;
    private String message;
    public PushNotificationResponse() {
    }
    public PushNotificationResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
