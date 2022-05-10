//import { provider } from "../../walletConnect/provider";
import connect from "./index";

const autoConnect = () => {
  const { state, connectWalletConnect } = connect();
  console.log("dfd");
  if (state.status) {
    console.log("inside");
    // provider.on("disconnect", (code, reason) => {
    //   console.log(code, reason);
    //   console.log("disconnected");
    //   state.status = false;
    //   state.address = "";
    //   localStorage.removeItem("userState");
    // });
    // provider.on("accountsChanged", (accounts) => {
    //   if (accounts.length < 1) {
    //     console.log("disconnected");
    //     state.status = false;
    //     state.address = "";
    //     localStorage.removeItem("userState");
    //   } else if (accounts.length > 0) {
    //     console.log(accounts[0]);
    //     state.address = accounts[0];
    //   }
    // });

    // provider.on("chainChanged", (chainId) => {
    //   console.log(chainId);
    //   state.chainId = chainId;
    //   //window.location.reload();
    // });

    if (localStorage.getItem("walletconnect") == null) {
      console.log("disconnected");
      console.log("disconnected");
      state.status = false;
      state.address = "";
      localStorage.removeItem("userState");
    }
    if (localStorage.getItem("walletconnect")) {
      (async () => {
        console.log("start");
        connectWalletConnect();
      })();
    }
  }
};

export default autoConnect;
