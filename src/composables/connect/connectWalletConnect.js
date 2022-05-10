import { providers } from "ethers";
import connect from "./index";
import { provider } from "../../walletConnect/provider";

const connectWalletConnect = async () => {
  try {
    const { state } = connect();
    //  Enable session (triggers QR Code modal)
    await provider.enable();

    const web3Provider = new providers.Web3Provider(provider);

    const signer = await web3Provider.getSigner();
    const address = await signer.getAddress();

    state.status = true;
    state.address = address;
    state.chainId = await provider.request({ method: "eth_chainId" });
    console.log(state.chainId);
    provider.on("disconnect", (code, reason) => {
      console.log(code, reason);
      console.log("disconnected");
      state.status = false;
      state.address = "";
      localStorage.removeItem("userState");
    });

    provider.on("accountsChanged", (accounts) => {
       if (accounts.length > 0) {
        state.address = accounts[0];
      }
    });

    provider.on("chainChanged", (chainId) => {
      console.log(chainId);
      state.chainId = chainId
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectWalletConnect;
