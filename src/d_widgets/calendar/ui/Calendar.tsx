import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ButtonFieldDatePicker } from '../component';

export const MaterialDatePicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ButtonFieldDatePicker />
        </LocalizationProvider>
    );
}
