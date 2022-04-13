package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class User extends BaseEntity {
	@Column(name="first_name",length = 30)
	private String firstName;
	@Column(name="last_name",length = 30)
	private String lastName;
	@Column(length = 30,unique = true)
	private String email;
	@Column(length = 15)
	private String phoneNo;
	@Column(length = 30,nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;

}
