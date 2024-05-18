// import React, {useState} from "react";
// import {RegistrationResponseSchema, RegScheme} from "@/f - entities/registration/model/registrationSchema";
// import {setAuthenticated} from "@/f - entities/session/modele/slice/session";
// import {z} from "zod";
// import {useRegisterUserMutation} from "@/g - shared/api/registrationApi";
// import {useDispatch} from "react-redux";
//
// const [registerUser, {isLoading, isError, error}] =
//     useRegisterUserMutation();
// const dispatch = useDispatch();
// const [validationErrors, setValidationErrors] = useState({
//     username: '',
//     password: '',
//     passwordConfirm: '',
//     firstName: '',
//     lastName: '',
// });
// export const handleRegistrationSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
//     const formData = Object.fromEntries(form.entries());
//     console.log('Form data before validation:', formData);
//     try {
//         setValidationErrors({
//             username: '',
//             password: '',
//             passwordConfirm: '',
//             firstName: '',
//             lastName: '',
//         });
//         const validatedData = RegScheme.parse(formData); // Валидация входных данных с помощью RegScheme
//         const response = await registerUser(validatedData).unwrap();
//         const validatedResponse =
//             RegistrationResponseSchema.parse(response); // Валидация ответа сервера с помощью RegistrationResponseSchema
//         console.log('Validated response:', validatedResponse);
//         dispatch(setAuthenticated(true));
//         console.log('Регистрация прошла успешно');
//     } catch (error) {
//         if (error instanceof z.ZodError) {
//             const errors = error.issues.reduce(
//                 (acc, issue) => {
//                     acc[issue.path[0] as keyof typeof validationErrors] =
//                         issue.message;
//                     return acc;
//                 },
//                 {} as typeof validationErrors
//             );
//             setValidationErrors(errors);
//             console.log('Validation errors:', errors);
//         } else {
//             console.error('Registration failed:', error);
//         }
//     }
// };