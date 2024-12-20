import React from 'react';
import { Form, Select } from 'antd';
import { organizationTypes, sectors, companyStatuses } from '../../../../types/company';

export const OrganizationDetails: React.FC = () => {
  return (
    <>
      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: 'Please select status' }]}
      >
        <Select placeholder="Select status">
          {companyStatuses.map(status => (
            <Select.Option key={status} value={status}>{status}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Organization Type"
        name="organizationType"
        rules={[{ required: true, message: 'Please select organization type' }]}
      >
        <Select placeholder="Select organization type">
          {organizationTypes.map(type => (
            <Select.Option key={type} value={type}>{type}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Sector"
        name="sector"
        rules={[{ required: true, message: 'Please select at least one sector' }]}
      >
        <Select 
          mode="multiple" 
          placeholder="Select sectors"
          optionFilterProp="children"
        >
          {sectors.map(sector => (
            <Select.Option key={sector} value={sector}>{sector}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};