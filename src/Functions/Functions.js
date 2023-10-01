import { AxiosClient } from "../Axios/AxiosCLient";
import { BACKEND_URLS, FRONTEND_URLS } from "../Routes/Routes";

export function UserData(navigate) {
    AxiosClient.post(
        BACKEND_URLS.USER_DATA,
        { switch_target_subcourse_id: 0, switch_phase_id: 0, app_version: "web" },
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate(FRONTEND_URLS.HOME_ROUTE);
      })
      .catch((error) => {
        console.log("under the userdata error", error);
      });
  }

  