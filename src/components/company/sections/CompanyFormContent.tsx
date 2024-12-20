import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import { CompanyInformation } from './CompanyInformation';
import { CompanyStatusDisplay } from '../components/CompanyStatusDisplay';
import type { FormInstance } from 'antd/es/form';
import type { CompanyInformation as CompanyInformationType } from '../../../types/company';

interface CompanyFormContentProps {
  form: FormInstance<CompanyInformationType>;
  formRef: React.RefObject<FormInstance>;
}

export const CompanyFormContent: React.FC<CompanyFormContentProps> = ({
  form,
}) => {
  const [extra, setExtra] = useState<React.ReactNode>(null);

  const updateExtra = (values: Partial<CompanyInformationType>) => {
    if (values.companyName?.en && values.status) {
      setExtra(
        <CompanyStatusDisplay
          companyName={values.companyName.en}
          status={values.status}
        />
      );
    }
  };

  useEffect(() => {
    const values = form.getFieldsValue();
    updateExtra(values);
  }, [form]);

  const handleValuesChange = (_: any, values: CompanyInformationType) => {
    updateExtra(values);
  };

  return (
    <Collapse 
      defaultActiveKey={['companyInfo']} 
      items={[{
        key: 'companyInfo',
        label: 'Company Information',
        children: <CompanyInformation onValuesChange={handleValuesChange} />,
        extra
      }]}
    />
  );
};