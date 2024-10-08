import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback, useState } from 'react';

import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js'; 
import SolanaWalletContextProvider from "./context/SolanaWalletContextProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <SolanaWalletContextProvider>{children}</SolanaWalletContextProvider> </body>
    </html>
  );
}
