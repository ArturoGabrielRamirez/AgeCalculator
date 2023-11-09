"use client"
import { useForm } from "react-hook-form";
import { useState } from "react";

type InputsValue = {
    dateOfBirth: any
}

export default function FormCalculator() {
    const [result, setResult] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsValue>()

    const calculator = (data: InputsValue) => {

        const dateToCalculate = new Date()
        const dates = data.dateOfBirth
        const dateOfBirth = new Date(dates)
        let rangeOfYear = new Date();

        const yearDate = dateOfBirth.getFullYear()
        const yearToCalculate = dateToCalculate.getFullYear()
        rangeOfYear.setFullYear(dateToCalculate.getFullYear() - 4);

        let milliseconsPerYear = 365.25 * 24 * 60 * 60 * 1000
        const obj: boolean[] = [];

        if (dateToCalculate <= rangeOfYear) {
            for (let i = yearDate; i <= yearToCalculate; i++) {
                if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
                    obj.push(true);
                }
            }
            const year = obj.length * 24 * 60 * 60 * 1000
            milliseconsPerYear = 365.25 / year * 24 * 60 * 60 * 1000
        }

        const toCalculate = dateOfBirth.getTime() - dateToCalculate.getTime()
        const actualTimeDiference = toCalculate - milliseconsPerYear

        const toSeconds = dateToCalculate <= rangeOfYear ? actualTimeDiference / 1000 : toCalculate / 1000
        const minutes = toSeconds / 60
        const hours = minutes / 60
        const days = hours / 24
        const realYearDiference = Math.floor(days / 365.25 * -1)

        return realYearDiference
    };

    const onSubmit = handleSubmit((data) => {
        calculator(data)
        setResult(calculator(data))
    });

    return (

        <form className="flex gap-4 flex-col justify-center items-center" onSubmit={onSubmit}>
            <input className="text-black p-4 w-64 text-xl" type="date" {...register("dateOfBirth", { required: true })} />
            {errors.dateOfBirth && <span className="text-xl text-red-600">Este campo es requerido</span>}

            <button className="p-4 w-64 text-xl bg-red-700 outline outline-red-800 rounded-lg hover:bg-red-600 hover:outline active:outline-red-600 active:bg-red-400 " type="submit">Colculate</button>
            {result !== null && <p className="text-xl">You are: {result} years old</p>}
        </form>

    )
}