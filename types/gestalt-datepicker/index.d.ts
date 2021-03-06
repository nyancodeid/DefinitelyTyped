// Type definitions for gestalt-datepicker 13.4
// Project: https://github.com/pinterest/gestalt/tree/master/packages/gestalt-datepicker, https://gestalt.netlify.app/DatePicker
// Definitions by: cgu <https://github.com/czgu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import * as React from 'react';
import { Locale } from 'date-fns';

/*
DatePicker Props Interface
https://gestalt.netlify.app/DatePicker
https://github.com/pinterest/gestalt/blob/master/packages/gestalt-datepicker/src/DatePicker.js
*/

export interface DatePickerProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: Date }) => void;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    excludeDates?: ReadonlyArray<Date> | undefined;
    helperText?: string | undefined;
    idealDirection?: 'up' | 'right' | 'down' | 'left' | undefined;
    includeDates?: ReadonlyArray<Date> | undefined;
    label?: string | undefined;
    localeData?: Locale | undefined;
    maxDate?: Date | undefined;
    minDate?: Date | undefined;
    nextRef?: React.Ref<any> | undefined;

    placeholder?: string | undefined;
    rangeEndDate?: Date | undefined;
    rangeSelector?: 'start' | 'end' | undefined;
    rangeStartDate?: Date | undefined;
    ref?: React.Ref<any> | undefined;
    value?: Date | undefined;
}

export default class DatePicker extends React.Component<DatePickerProps, any> {}
