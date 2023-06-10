import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../css/Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBeautician, setSelectedBeautician] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: ''
  });
  const [beauticians, setBeauticians] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchServices();
    fetchBeauticians();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:8000/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const fetchBeauticians = async () => {
    try {
      const response = await axios.get('http://localhost:8000/beauticians');
      setBeauticians(response.data);
    } catch (error) {
      console.error('Error fetching beauticians:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBeauticianSelect = (e) => {
    setSelectedBeautician(e.target.value);
  };

  const handleBookNow = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create the client object
      const client = {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number
      };

      // Send the client data to your backend to store in the clients table
      const clientResponse = await axios.post('http://localhost:8000/clients', client);

      // Create the appointment object
      const appointment = {
        client_id: clientResponse.data.id,
        service_id: selectedService.id,
        beautician_id: selectedBeautician
      };

      // Send the appointment data to your backend to store in the appointments table
      await axios.post('http://localhost:8000/appointments', appointment);

      // Update the available slots for the service
      const updatedServices = services.map((s) => {
        if (s.id === selectedService.id) {
          return {
            ...s,
            available_slots: s.available_slots - 1
          };
        }
        return s;
      });

      setServices(updatedServices);
      setFormData({
        name: '',
        email: '',
        phone_number: ''
      });
      setSelectedBeautician('');
      setSelectedService(null);
      setModalIsOpen(false);

      // Display a confirmation message
      alert('The Appointment is successfully booked');
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div>
      <div>
        <h1 id="service-header">Services</h1>
      </div>
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <h3 className="service-name"> {service.name}</h3>
          <img className="service-image" src={service.image} alt="Service Image" />
          <p className="service-description">Description: {service.description}</p>
          <p className="service-slots">Available Slots: {service.available_slots}</p>
          <p className="service-price">Price: {service.price}</p>
          <button className="book-now-btn" onClick={() => handleBookNow(service)}>Book Now</button>

          {selectedService && selectedService.id === service.id && (
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal">
              <h2 className="modal-title">Book Appointment</h2>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />

                <label htmlFor="phone_number">Phone Number:</label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className="form-input"
                />

                <label htmlFor="beautician">Beautician:</label>
                <select
                  id="beautician"
                  value={selectedBeautician}
                  onChange={handleBeauticianSelect}
                  className="form-input"
                >
                  <option value="">Select Beautician</option>
                  {beauticians.map((beautician) => (
                    <option key={beautician.id} value={beautician.id}>
                      {beautician.name}
                    </option>
                  ))}
                </select>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </Modal>
          )}
          <hr className="divider" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;

