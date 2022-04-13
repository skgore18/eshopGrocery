package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.dto.LoginRequest;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User registerOrEditUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public User authenticateUser(LoginRequest request) {
		return userRepo.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user Credentials!!!!!"));
	}

	@Override
	public User findbyEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public User findById(Integer userId) {
		return userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user Credentials!!!!!"));
	}

	@Override
	public List<User> getUserByRole(String role) {
		return userRepo.findAll().stream().filter(user -> user.getRole().name().equals(role))
				.collect(Collectors.toList());
	}

	@Override
	public String deleteUserById(Integer uid) {
		userRepo.deleteById(uid);
		return "user with " + uid + " deleted Succefully!! ";
	}

}
