<<<<<<< HEAD
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./css/AdminDashboard.css"
import authService from '../service/auth.service'
import RegisterDelivery from './RegisterDelivery'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/");
    window.location.reload();

  }
  return (
    <div className='admin-dashboard-container'>
      <div className='admin-dashboard-navbar'>
        <div className='admin-title'>ADMIN DASHBOARD</div>
        <div className="admin-logout" onClick={handleLogout}>Logout</div>
      </div>
      <div className='admin-dashboard-body'>
        <div className="admin-actions"><Link to="/adminProductList">Products</Link></div>
        <div className="admin-actions"><Link to="/userList">Users</Link></div>
        <div className="admin-actions"><Link to="/categoryList">Categories</Link></div>
        <div className="admin-actions"><Link to="/stockReport">Stock Report</Link></div>
        <div className="admin-actions"><Link to="/registerDelivery">Register Delivery Person</Link></div>
        <div className="admin-actions"><Link to="/devPerList">Delivery Squad</Link></div>
        <div className="admin-actions"><Link to="/orderList">Order Details</Link></div>
        
      </div>
    </div>
  )
}

=======
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./css/AdminDashboard.css"
import authService from '../service/auth.service'
import RegisterDelivery from './RegisterDelivery'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/");
    window.location.reload();

  }
  return (
    <div className='admin-dashboard-container'>
      <div className='admin-dashboard-navbar'>
        <div className='admin-title'>ADMIN DASHBOARD</div>
        <div className="admin-logout" onClick={handleLogout}>Logout</div>
      </div>
      <div className='admin-dashboard-body'>
        <div className="admin-actions"><Link to="/adminProductList">Products</Link></div>
        <div className="admin-actions"><Link to="/userList">Users</Link></div>
        <div className="admin-actions"><Link to="/categoryList">Categories</Link></div>
        <div className="admin-actions"><Link to="/stockReport">Stock Report</Link></div>
        <div className="admin-actions"><Link to="/registerDelivery">Register Delivery Person</Link></div>
        <div className="admin-actions"><Link to="/devPerList">Delivery Squad</Link></div>
        <div className="admin-actions"><Link to="/orderList">Order Details</Link></div>
        
      </div>
    </div>
  )
}

>>>>>>> ebfd4258418cc50828d3b35c9aa9be5a4de1ee6f
export default AdminDashboard