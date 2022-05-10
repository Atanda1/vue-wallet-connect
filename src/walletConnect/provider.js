import WalletConnectProvider from "@walletconnect/web3-provider";

export const provider = new WalletConnectProvider({
  infuraId: process.env.VUE_APP_INFURA_ID,
});

