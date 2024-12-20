import React from 'react';
import { Form, Input, DatePicker } from 'antd';
import dayjs from 'dayjs';

export const RegistrationDetails: React.FC = () => {
  return (
    <>
      <Form.Item
        label="Corporation Number"
        name="corporationNumber"
        rules={[{ required: true, message: 'Please enter corporation number' }]}
      >
        <Input placeholder="Enter corporation number" />
      </Form.Item>

      <Form.Item
        label="Incorporation Date"
        name="incorporationDate"
        rules={[{ required: true, message: 'Please select incorporation date' }]}
        getValueProps={(date: string) => ({
          value: date ? dayjs(date) : undefined
        })}
      >
        <DatePicker className="w-full" />
      </Form.Item>

      <Form.Item
        label="NAICS Code"
        name="naicsCode"
        rules={[{ pattern: /^\d{6}$/, message: 'Please enter a valid 6-digit NAICS code' }]}
      >
        <Input placeholder="Enter NAICS code" maxLength={6} />
      </Form.Item>

      <Form.Item
        label="Federal Business Registry Number"
        name="federalBusinessRegistryNumber"
        rules={[{ pattern: /^\d{9}$/, message: 'Please enter a valid 9-digit registry number' }]}
      >
        <Input placeholder="Enter federal business registry number" maxLength={9} />
      </Form.Item>
    </>
  );
};