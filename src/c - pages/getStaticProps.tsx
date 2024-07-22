// import { useFetchUserSessionQuery } from '@/f - entities/api/authApi';
// import { setAuth } from '@/f - entities/redux/session/modele/action/action';
// import { setUser } from '@/f - entities/redux/user/model/action/action';
// import { setPending } from '@/f - entities/redux/pending/modele/action/action';
// import { useAppDispatch } from '@/g - shared/lib/store';
// import { useEffect } from 'react';
// import { UserSessionLoader } from '@/e - features/user/UserSessionFetcher';
// import { GetStaticPropsContext } from 'next';

// export const getStaticProps = async (ctx: GetStaticPropsContext) => {
//     const dispatch = useAppDispatch();

//     const { data, error, isLoading, isSuccess, isError } =
//         await useFetchUserSessionQuery();

//     if (isLoading) {
//         dispatch(setPending(true));
//     } else if (isSuccess) {
//         dispatch(setPending(false));
//         if (data.response_status === 0) {
//             dispatch(setAuth(true));
//             dispatch(setUser(data.data.id));
//         } else if (isError) {
//             dispatch(setAuth(false));
//         }
//     }

//     return {
//         props: {
//             user: data?.data,
//             auth: data?.response_status === 0,
//         },
//     };
// };

// export default UserSessionLoader;
