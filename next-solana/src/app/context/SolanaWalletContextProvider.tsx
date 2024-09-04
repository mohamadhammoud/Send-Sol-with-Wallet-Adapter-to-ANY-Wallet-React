"use client"

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo } from 'react'
import {
    PhantomWalletAdapter
} from '@solana/wallet-adapter-wallets';

const SolanaWalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
     // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
     const network = WalletAdapterNetwork.Devnet;

     // You can also provide a custom RPC endpoint.
     const endpoint = useMemo(() => clusterApiUrl(network), [network]);
 
     // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
     // Only the wallets you configure here will be compiled into your application, and only the dependencies
     // of wallets that your users connect to will be loaded.
     const wallets = [ new PhantomWalletAdapter()];

    
 
     return (
         <ConnectionProvider endpoint={endpoint}>
             <WalletProvider wallets={wallets} autoConnect>
                 <WalletModalProvider>{children}</WalletModalProvider>
             </WalletProvider>
         </ConnectionProvider>
     );
}

export default SolanaWalletContextProvider;
