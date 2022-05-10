import { provider } from "../../walletConnect/provider";
import connect from "./index";

const disconnectWallet = async () => {
    const { state } = connect();
    state.status = false;
    state.address = "";
    localStorage.removeItem("userState");
    await provider.disconnect();
}

export default disconnectWallet;