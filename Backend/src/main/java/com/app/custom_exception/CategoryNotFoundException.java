package com.app.custom_exception;

public class CategoryNotFoundException extends RuntimeException{

	public CategoryNotFoundException(String errMessage ) {
		super(errMessage);
	}
	
}
