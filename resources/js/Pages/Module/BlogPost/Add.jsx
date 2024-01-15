import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import Select from 'react-select';
import { Controller, useForm } from "react-hook-form";

function Add() {
    const { control, register, handleSubmit, setValue, reset, formState: { errors } } = useForm();



    //For Language Select Field
    const LanguageOptions = [
        { value: 'English', label: 'English' },
        { value: 'Bangla', label: 'Bangla' },
    ];

    //For Category Select Field
    const CategoryOptions = [
        { value: 'Digital Service', label: 'Digital Service' },
        { value: 'Physical Service', label: 'Physical Service' },
    ];

    const handleSelectLanguage = (selectedOption) => {
        setValue('language', selectedOption?.value);
    };

    const handleSelectCategory = (selectedOption) => {
        setValue('category', selectedOption?.value);
    };

    function onSubmit(data) {
        console.log(data)
        // router.post("/admin/color/store", data);
    }



    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                    >
                        <path
                            d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            opacity="0.5"
                            d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="#" className="text-primary hover:underline">
                            Blog
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Post</span>
                    </li>
                </ul>
            </div>
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">
                            Add New Post
                        </h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">

                                {/* React Select Field for Language */}
                                <div>
                                    <label>Select Language <span className="text-danger">*</span></label>
                                    <Controller

                                        control={control}
                                        name="language"
                                        render={({ field }) => (

                                            <Select
                                                options={LanguageOptions}
                                                value={LanguageOptions.find((option) => option.value === field.value)}
                                                onChange={handleSelectLanguage}
                                            />

                                        )}

                                    />
                                </div>

                                {/* React Slect Field for Category */}
                                <div>
                                    <label>Category <span className="text-danger">*</span></label>
                                    <Controller

                                        control={control}
                                        name="category"
                                        render={({ field }) => (

                                            <Select
                                                options={CategoryOptions}
                                                value={CategoryOptions.find((option) => option.value === field.value)}
                                                onChange={handleSelectCategory}
                                                placeholder="Select Category"
                                            />

                                        )}

                                    />
                                </div>

                                {/* For name input */}
                                <div>
                                    <label> Title <span className="text-danger">*</span> </label>
                                    <input
                                        {...register("title", { required: "Title Is required" })}
                                        type="text"
                                        className="form-input"
                                        placeholder="Title"
                                    />
                                    {errors.title && <p className="text-red-600 pt-2">{errors.title.message}</p>}
                                </div>

                                {/* Upload Image Field */}

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

Add.layout = (page) => (
    <MainLayout children={page} title="E-SHOP || Add Group Of Company" />
);

export default Add;