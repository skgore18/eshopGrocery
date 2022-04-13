package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.pojos.User;

public interface IUserService {
	User registerOrEditUser(User user);

	User authenticateUser(LoginRequest request);

	User findbyEmail(String email);

	User findById(Integer userId);

	List<User> getUserByRole(String string);

	String deleteUserById(Integer uid);
}
