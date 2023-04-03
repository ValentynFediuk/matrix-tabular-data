import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { GridDispatchContext } from "store/contexts";
import { GridActionTypes } from "types";
import { Input } from "../ui";
import {FormProps, FormVales} from "./Form.types";

export const Form: FC<FormProps> = ({ handleSubmit }) => {
    const [formState, setFormState] = useState<FormVales>({
        rows: "",
        columns: "",
        errors: {
            rowsError: false,
            rowsErrorMessage: "",
            columnsError: false,
            columnsErrorMessage: "",
        },
    });

    useEffect(() => {
        let errorMessage = "";

        if (formState.errors.rowsError) {
            errorMessage = 'The "M" value should be a number from 0 to 100';
        }

        if (formState.errors.columnsError) {
            errorMessage = 'The "N" value should be a number from 0 to 100';
        }

        setFormState({
            ...formState,
            errors: {
                ...formState.errors,
                [errorMessage ? "rowsErrorMessage" : "columnsErrorMessage"]: errorMessage,
            },
        });
    }, [formState.errors.rowsError, formState.errors.columnsError]);

    const dispatch = useContext(GridDispatchContext);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, actionType: GridActionTypes) => {
        const newValue = event.target.value.toString().trim();

        const validationRules = /^\d{1,2}$|^100$/;

        switch (actionType) {
            case 'setRows':
                const rowsError = !validationRules.test(newValue);
                setFormState({
                    ...formState,
                    rows: newValue,
                    errors: {
                        ...formState.errors,
                        rowsError,
                        rowsErrorMessage: rowsError ? 'The "M" value should be a number from 0 to 100' : '',
                    },
                });
                dispatch({ type: actionType, rows: newValue });
                break;

            case 'setColumns':
                const columnsError = !validationRules.test(newValue);
                setFormState({
                    ...formState,
                    columns: newValue,
                    errors: {
                        ...formState.errors,
                        columnsError,
                        columnsErrorMessage: columnsError ? 'The "N" value should be a number from 0 to 100' : '',
                    },
                });
                dispatch({ type: actionType, columns: newValue });
                break;

            default:
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="rows-input"
                onChange={(event) => handleInputChange(event, "setRows")}
                value={formState.rows}
                placeholder='Enter the "M" value'
                label="Rows"
                errorMessage={formState.errors.rowsErrorMessage}
            />
            <Input
                id="columns-input"
                onChange={(event) => handleInputChange(event, "setColumns")}
                value={formState.columns}
                placeholder='Enter the "N" value'
                label="Columns"
                errorMessage={formState.errors.columnsErrorMessage}
            />
            <button type="submit">Submit</button>
        </form>
    );
};