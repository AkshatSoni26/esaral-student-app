import {FiHelpCircle, FiHome, FiUser} from 'react-icons/fi'
import {BiMessageAltCheck,} from 'react-icons/bi'
import {PiStudentBold} from 'react-icons/pi'
import {GoBook} from 'react-icons/go'
import { FRONTEND_URLS } from '../Routes/Routes'
import CompanyLogo from '../Images/Logo/logo.png'
import Image from '../Images/DefaultImage/video_default_thumb.png'
import VidBut from '../Images/VideoPlay/play button.png'





//------------------------------------- country_code  ---------------------------------- //
export const country_code = 91


//------------------------------------- Color Codes  ---------------------------------- //
export const COLOR_CODES = {
  'danger': '#CC2C2C',
  'brand': '#5F46E3'
}

//----------------------------- Login page caursal images  ---------------------------------- //
export const CaursalImages = [
    {
      url: require("../Images/LoginPageCoursalImages/Learn.png"),
      heading: "Learn",
      text: "Kota's top IITian and Doctor faculties. Amazing visualisation to understand any concept easily.",
    },
    {
      url: require("../Images/LoginPageCoursalImages/Practice.png"),
      heading: "Practice",
      text: "Chapter-wise sheets and PYQs with detailed solutions.",
    },
    {
      url: require("../Images/LoginPageCoursalImages/Revise.png"),
      heading: "Revise",
      text: "Quickly revise the syllabus with crystallized videos, mind maps and notes.",
    },
    {
      url: require("../Images/LoginPageCoursalImages/Test.png"),
      heading: "Test",
      text: "Latest Pattern tests from expert faculties with detailed analysis.",
    },
  ];


//--------------------------------------- Login And Register Lines -------------------------------------------- //

export const LoginPageConstantLines = {
  'phoneNumber': {
    'heading': "Enter Phone Number",
    'subTitle':"We’ll send you an OTP for verification",
    'warning': "Incorrect Number."
  },
  'otp': {
    'heading':'Verify OTP',
    'subTitle': 'OTP sent to +91 ', 
    'warning':'OTP is not correct.',
    'resendOtp':'Didn’t recieve the OTP?',
    'issue': 'Still facing difficulties? ',
  }
}

export const RegisterPageConstantLines = { 
  'name': {
    "subTitle": "Let’s customize your eSaral journey",
    "subTitle2" : "What’s your name?",
    "placholder": "Enter your name here",
    "warning1" : "Please remove special Characters.",
    "warning2" : "First enter the name.",
  },
  "AttemptYear": {
    "subTitle": "Let’s customize your eSaral journey",
    "subTitle1": "I am studying in class"
  },
  "Exam": {
    "subTitle": "Let’s customize your eSaral journey",
    "subTitle1": "I am preparing for"
  }
}

//------------------------------------------------------ ICONS --------------------------------------------- //

export const ICONS = {
}

export const ICON_SIZE = 35

//---------------------------------------------- Button-colors---------------------------------- //
export const ButtonColors = [
  {
    "background": '#FFB023',
    "BorderColor": '#FFF3DC',
  },
  {
    "background": '#3090E8',
    "BorderColor": '#E5F8FF',
  },{
    "background": '#5F46E3',
    "BorderColor": '#ECE9FF',
  },{
    "background": '#C91E5C',
    "BorderColor": '#FFEAF4',
  },{
    "background": '#D65E25',
    "BorderColor": '#FFE8DC',
  },{
    "background": '#008444',
    "BorderColor": '#E1F9E3',
  },
]


//---------------------------------------------- Home-Menu-List ---------------------------------- //
const ICON_Size = 22

export const HomeMenuList = [
  [ <FiHome size={ICON_Size}/>, 'Home', FRONTEND_URLS.HOME_ROUTE],
  [<FiUser size={ICON_Size} />, 'My Account', FRONTEND_URLS.MY_ACCOUNT],
  [<GoBook size={ICON_Size}  />,'Courses', FRONTEND_URLS.COURSES ],
  [ <PiStudentBold size={ICON_Size}  />,'Mentorship', FRONTEND_URLS.MENTORSHIP ],
  [<BiMessageAltCheck size={ICON_Size} />,'Doubut Solve', FRONTEND_URLS.DOUBUT_SOLVE ],
  [<FiHelpCircle size={ICON_Size}  />, "Help And Support", FRONTEND_URLS.HELP_AND_SUPPORT ],
]


//---------------------------------------------- Company-Logo ---------------------------------- //
export const logo = CompanyLogo
export const DefaultImage = Image
export const PlayButton = VidBut