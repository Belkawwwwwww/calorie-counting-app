import React from 'react';
import { ZodType } from 'zod';
import { InputBox } from '../input/inputBox/ui/InputBox';

export type InputField = {
    type: string;
    id: string;
    label: string;
    placeholder: string;
    validationSchema: ZodType<any, any>;
    value: any;
    onChange: (value: string, schema: ZodType<any, any>) => void;
    error?: string;
};

export type Props = {
    fields: InputField[];
};

export const InputFieldGroup: React.FC<Props> = ({ fields }) => {
    return (
        <>
            {fields.map((field) => (
                <InputBox
                    key={field.id}
                    type={field.type}
                    id={field.id}
                    label={field.label}
                    value={field.value}
                    placeholder={field.placeholder}
                    onChange={(e) =>
                        field.onChange(e.target.value, field.validationSchema)
                    }
                    useUnframedInput={true}
                    error={field.error}
                />
            ))}
        </>
    );
};
