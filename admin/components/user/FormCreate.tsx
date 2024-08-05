import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { REGISTER_ENDPOINT } from '@/utils/constants/endpoints';
import type { FormData } from './interfaces';

const FormCreate: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    img: '',
    gender: '',
    isAdmin: false,
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files, id } = event.target;
    if (files && files.length > 0) {
      const src = URL.createObjectURL(files[0]);
      if (id === 'file-input') {
        setImageSrc(src);
        setFormData((prevData) => ({ ...prevData, img: files[0] }));
      }
    }
  };

  const validate = (validateData: FormData) => {
    const errors: Partial<FormData> = {};

    if (!validateData.name) {
      errors.name = 'name is required';
    }
    if (!validateData.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-z]+/.test(validateData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!validateData.phone) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10,15}$/.test(validateData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!validateData.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
        const data = new FormData();
        for (const key in formData) {
            const value = formData[key as keyof FormData];
            if (typeof value === 'boolean') {
                data.append(key, value ? 'true' : 'false');
            } else if (value instanceof File) {
                data.append(key, value);
            } else {
                data.append(key, value);
            }
        }
        try {
            const response = await axios.post(REGISTER_ENDPOINT, data);
            if (response.status === 200) {
                alert('User has been created.');
                setShowModal(false);
            } else {
                alert('Error creating user.');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Error creating user.');
        }
    } else {
        setErrors(validationErrors);
    }
};


  return (
    <div>
      <button
        type="button"
        data-toggle="modal"
        data-target=".btn-create-user"
        onClick={() => setShowModal(true)}
        className="btn btn-info mx-2"
      >
        Create <i className="fa fa-plus"></i>
      </button>
      {showModal && (
        <div className="modal1 btn-create-user">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">
                  Create user
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="demo-form" data-parsley-validate onSubmit={handleSubmit}>
                  <div className="form-group">
                    {imageSrc && (
                      <Image className="mb-5" src={imageSrc} width={100} height={100} alt="image" />
                    )}
                    <label
                      className="font-semibold cursor-pointer text-black rounded-lg py-2.5 px-5 bg-[#5A738E]"
                      htmlFor="file-input"
                    >
                      Upload Main Image
                    </label>
                    <input
                      onChange={handleFileChange}
                      accept="image/*"
                      type="file"
                      id="file-input"
                      className="hidden"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Username * :</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      name="name"
                      required
                      onChange={handleChange}
                    />
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email * :</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      required
                      onChange={handleChange}
                    />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone :</label>
                    <input
                      type="text"
                      id="phone"
                      className="form-control"
                      name="phone"
                      required
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="text-danger">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label>Gender :</label>
                    <p>
                      M:
                      <input
                        type="radio"
                        className="flat"
                        name="gender"
                        id="genderM"
                        value="male"
                        onChange={handleChange}
                      />
                      F:
                      <input
                        type="radio"
                        className="flat"
                        name="gender"
                        id="genderF"
                        value="female"
                        onChange={handleChange}
                      />
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      required
                      onChange={handleChange}
                    />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                  </div>
                  <div className="form-group">
                    <label>Admin :</label>
                    <input
                      type="checkbox"
                      className="flat"
                      name="isAdmin"
                      id="admin"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormCreate;
