import React from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;

export const BasicInformation: React.FC = () => {
  return (
    <>
      <Form.Item
        label="Company Name (English)"
        name={['companyName', 'en']}
        rules={[{ required: true, message: 'Please enter company name in English' }]}
      >
        <Input placeholder="Enter company name in English" />
      </Form.Item>

      <Form.Item
        label="Company Name (French)"
        name={['companyName', 'fr']}
        rules={[{ required: true, message: 'Please enter company name in French' }]}
      >
        <Input placeholder="Enter company name in French" />
      </Form.Item>

      <Form.Item
        label="Company Overview"
        name="companyOverview"
        rules={[{ required: true, message: 'Please provide a company overview' }]}
      >
        <TextArea 
          rows={4} 
          placeholder="Brief description of the company"
        />
      </Form.Item>

      <Form.Item
        label="Legal Name"
        name="legalName"
        rules={[{ required: true, message: 'Please enter legal name' }]}
      >
        <Input placeholder="Enter legal name" />
      </Form.Item>

      <Form.Item
        label="Fundspoke Representative"
        name="fundspokeRepresentative"
        rules={[{ required: true, message: 'Please enter Fundspoke representative' }]}
      >
        <Input placeholder="Enter Fundspoke representative name" />
      </Form.Item>
    </>
  );
};