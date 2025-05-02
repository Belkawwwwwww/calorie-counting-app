import { useMealDataContext } from "@/g_shared/lib/context";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useCallback } from "react";
import { ButtonDateField } from "./ButtonDateField";


export const ButtonFieldDatePicker = (props: DatePickerProps) => {
    const { setSelectedDate } = useMealDataContext();
    const handleDateChange = useCallback(
        (date: Dayjs | null) => {
            setSelectedDate(date);
        },
        [setSelectedDate]
    );

    return (
        <DatePicker
            {...props}
            slots={{ field: ButtonDateField, ...props.slots }}
            format='DD.MM.YYYY'
            onChange={handleDateChange}
        />
    );
}