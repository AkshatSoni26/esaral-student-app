
export const BASE = 'https://development.esaral.com'

const start_var = '/'


export const BACKEND_URLS = {
    OTP_SENDER: `${BASE}/v1/users/phone-verification`,
    USER_DATA_PROVIDER: `${BASE}/v1/users/`,
    USER_DATA: `${BASE}/v2/users/home`,
    SUBJECT_DATA_API: `${BASE}/v2/contents/get-node-content-tree`,
    VIDEO_OTP: `${BASE}/v2/contents/get-video-otp`,
    SET_NAME: `${BASE}/v2/users/update-profile`,
    GET_ALL_TARGETS: `${BASE}/v1/users/targets`,
    NEW_ENROLLMENTS: `${BASE}/v2/users/enroll`,
    SEARCH_API: `${BASE}/v2/contents/search`,
    USAGE: `${BASE}/v2/users/usage`,

    /*----------------------------------- test Api --------------------------------------*/
    CHECK_USER_QUIZ_ATTEMPT: `${BASE}/v2/quizes/check-user-quiz-attempt`,
    GET_QUIZ_DETAILS: `${BASE}/v2/quizes/get-quiz-details`,
    QUIZ_STUDENT_ATTEMPT: `${BASE}/v2/quizes/quiz-student-attempt`,
    GET_QUIZ_RESULTS: `${BASE}/v2/quizes/get-quiz-results`

}


export const FRONTEND_URLS = {
    // ROOT:start_var,
    LOGIN_ROUTE: `${start_var}login`,
    HOME_ROUTE: `${start_var}`,
    REGISTER_ROUTE: `${start_var}Register`,
    SEARCH_ROUTE: `${start_var}search`,
    ENROLLMENTS: `${start_var}enrollment`,
    MY_ACCOUNT: `${start_var}my-account`,
    COURSES: `${start_var}courses`,
    MENTORSHIP: `${start_var}mentorship`,
    DOUBUT_SOLVE: `${start_var}doubut-solve`,
    HELP_AND_SUPPORT: `${start_var}help-and-support`,
    PAGE_NOT_FOUND: `${start_var}PageNotFound`,
    PRACTICE_ROOT: `${start_var}practice/`,
    TEST_ROOT: `${start_var}test/`,
    TEST_INSTRUCTIONS: `${start_var}test/:quizId/instructions`
}