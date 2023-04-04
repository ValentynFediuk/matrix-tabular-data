import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { GridDispatchContext } from "store/contexts";
import { GridActionTypes } from "types";
import { Input } from "../ui";
import {FormProps, FormVales} from "./Form.types";
import styles from './Form.module.scss'

export const Form: FC<FormProps> = ({ handleSubmit }) => {
    const [formState, setFormState] = useState<FormVales>({
        rows: "",
        columns: "",
        closest: "",
        closestLimit: 0,
        errors: {
            rowsError: false,
            rowsErrorMessage: "",
            columnsError: false,
            columnsErrorMessage: "",
            closestError: false,
            closestErrorMessage: "",
        },
    });

    const { rows, columns, closest, errors, closestLimit } = formState;

    const ROWS_VALIDATION_RULES = /^\d{1,2}$|^100$/
    const COLUMNS_VALIDATION_RULES = /^\d{1,2}$|^100$/
    const CLOSEST_VALIDATION_RULES = new RegExp(`^(0|[1-9]\\d{0,${closestLimit.toString().length - 1}}(?:\\.\\d{1,10})?)$`)

    const hasErrors = formState.errors.rowsError || formState.errors.columnsError || formState.errors.closestError;

    useEffect(() => {
        if (hasErrors) {
            setFormState((prevState) => {
                const updatedErrors = { ...prevState.errors };

                if (prevState.errors.rowsError) {
                    updatedErrors.rowsErrorMessage =
                        'The "M" value should be a number from 0 to 100';
                }

                if (prevState.errors.columnsError) {
                    updatedErrors.columnsErrorMessage =
                        'The "N" value should be a number from 0 to 100';
                }

                if (prevState.errors.closestError) {
                    updatedErrors.closestErrorMessage = `The "X" value should be a number from 0 to ${closestLimit}`;
                }

                return {
                    ...prevState,
                    errors: updatedErrors,
                };
            });
        } else {
            setFormState((prevState) => ({
                ...prevState,
                errors: {
                    rowsError: false,
                    rowsErrorMessage: "",
                    columnsError: false,
                    columnsErrorMessage: "",
                    closestError: false,
                    closestErrorMessage: "",
                },
            }));
        }
    }, [hasErrors, closestLimit]);

    useEffect(() => {
        setFormState((prevState) => ({...prevState, closestLimit: +formState.rows * +formState.columns}))
    }, [rows, columns])

    const dispatch = useContext(GridDispatchContext);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, actionType: GridActionTypes) => {
        const newValue = event.target.value.toString().trim();

        switch (actionType) {
            case 'setRows':
                const rowsError = !ROWS_VALIDATION_RULES.test(newValue);

                setFormState({
                    ...formState,
                    rows: newValue,
                    errors: {
                        ...errors,
                        rowsError,
                        rowsErrorMessage: rowsError
                            ? 'The "M" value should be a number from 0 to 100'
                            : '',
                    },
                });
                dispatch({ type: actionType, rows: newValue });
                break;

            case 'setColumns':
                const columnsError = !COLUMNS_VALIDATION_RULES.test(newValue);
                setFormState({
                    ...formState,
                    columns: newValue,
                    errors: {
                        ...errors,
                        columnsError,
                        columnsErrorMessage: columnsError
                            ? 'The "N" value should be a number from 0 to 100'
                            : '',
                    },
                });
                dispatch({ type: actionType, columns: newValue });
                break;

            case 'setClosest':
                const closestError = !CLOSEST_VALIDATION_RULES.test(newValue);
                setFormState({
                    ...formState,
                    closest: newValue,
                    errors: {
                        ...errors,
                        closestError,
                        closestErrorMessage: closestError
                            ? `The "X" value should be a number from 0 to ${closestLimit}`
                            : '',
                    },
                });
                dispatch({ type: actionType, closest: newValue });
                break;

            default:
                break;
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                id="rows-input"
                onChange={(event) => handleInputChange(event, "setRows")}
                value={rows}
                placeholder='Enter the "M" value'
                label="Rows"
                errorMessage={formState.errors.rowsErrorMessage}
            />
            <Input
                id="columns-input"
                onChange={(event) => handleInputChange(event, "setColumns")}
                value={columns}
                placeholder='Enter the "N" value'
                label="Columns"
                errorMessage={formState.errors.columnsErrorMessage}
            />
            <Input
                id="closest-amount-input"
                onChange={(event) => handleInputChange(event, "setClosest")}
                value={closest}
                placeholder='Type the "X" value'
                label="Closest amount"
                errorMessage={formState.errors.closestErrorMessage}
            />
            <button type="submit">Submit</button>
        </form>
    );
};