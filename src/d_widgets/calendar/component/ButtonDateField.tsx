import Button from '@mui/material/Button';
import useForkRef from '@mui/utils/useForkRef';
import { DatePickerFieldProps, useValidation, validateDate } from '@mui/x-date-pickers';
import {
    usePickerContext,
    useSplitFieldProps
} from '@mui/x-date-pickers/hooks';
import { Dayjs } from 'dayjs';

const initialLabel = "СЕГОДНЯ";

const getFormattedDate = (date: Dayjs | null, fieldFormat: string): string => {
    return date == null ? initialLabel : date.format(fieldFormat);
};

export const ButtonDateField = (props: DatePickerFieldProps) => {
    const { internalProps, forwardedProps } = useSplitFieldProps(props, 'date');
    const pickerContext = usePickerContext();
    const handleRef = useForkRef(pickerContext.triggerRef, pickerContext.rootRef);
    const { hasValidationError } = useValidation({
        validator: validateDate,
        value: pickerContext.value,
        timezone: pickerContext.timezone,
        props: internalProps,
    });

    const valueStr = getFormattedDate(pickerContext.value, pickerContext.fieldFormat);

    return (
        <Button
            {...forwardedProps}
            variant="outlined"
            color={hasValidationError ? 'error' : 'primary'}
            ref={handleRef}
            className={pickerContext.rootClassName}
            sx={{
                ...pickerContext.rootSx,
                border: 'none',
                color: 'black',
                fontFamily: 'Courier New',
            }}

            onClick={() => pickerContext.setOpen((prev) => !prev)}
        >
            {pickerContext.label ? `${pickerContext.label}: ${valueStr}` : valueStr}
        </Button>
    );
}