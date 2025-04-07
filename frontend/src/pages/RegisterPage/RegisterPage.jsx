import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css'; // Import CSS module
import { registerUser } from '../../services/api';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    role: 'Employee',
    fullName: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }

    try {
      console.log('Sending form data:', formData);

      const response = await registerUser(formData);

      if (response && response.message === 'Đăng ký thành công!') {
        alert('Đăng ký thành công!');

        setFormData({
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          phone: '',
          role: 'Employee',
          fullName: '',
          address: '',
        });
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu đăng ký:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Có lỗi xảy ra, vui lòng thử lại sau!');
      }
    }
  };

  return (
    <div>
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>Tên người dùng:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Mật khẩu:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Xác nhận mật khẩu:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Số điện thoại:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="role" className={styles.label}>Vai trò:</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange} required className={styles.input}>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>Họ và tên:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.label}>Địa chỉ:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={styles.input} />
        </div>

        <button type="submit" className={styles.button}>Đăng Ký</button>
      </form>
    </div>
  );
};

export default RegisterPage;
