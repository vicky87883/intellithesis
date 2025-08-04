import express from 'express';
import Contact from '../models/Contact';

const router = express.Router();

// Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Please provide a valid email address'
      });
    }

    // Create contact submission
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      status: 'pending'
    });

    return res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        status: contact.status,
        createdAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      message: 'Failed to submit contact form'
    });
  }
});

// Get all contact submissions (admin only)
router.get('/admin', async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']],
      attributes: ['id', 'name', 'email', 'subject', 'status', 'createdAt']
    });

    res.json({
      contacts,
      total: contacts.length
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      message: 'Failed to fetch contact submissions'
    });
  }
});

// Update contact status (admin only)
router.put('/admin/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        message: 'Invalid status. Must be pending, read, or replied'
      });
    }

    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({
        message: 'Contact submission not found'
      });
    }

    await contact.update({ status });
    
    return res.json({
      message: 'Contact status updated successfully',
      contact: {
        id: contact.id,
        status: contact.status,
        updatedAt: contact.updatedAt
      }
    });
  } catch (error) {
    console.error('Update contact status error:', error);
    return res.status(500).json({
      message: 'Failed to update contact status'
    });
  }
});

// Get contact submission details (admin only)
router.get('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({
        message: 'Contact submission not found'
      });
    }

    return res.json({ contact });
  } catch (error) {
    console.error('Get contact details error:', error);
    return res.status(500).json({
      message: 'Failed to fetch contact details'
    });
  }
});

export default router; 