# Enabling Private Payments using Elusiv SDK in Solana

We are enabling Private Payments using Elusiv SDK in Solana and are extending the sample examples available for Drone Services and Repair payments: https://github.com/seetadev/EthOps/tree/main/Solana-Analytics-NFTs-Payments/private-payments-Elusiv-SDK

## Setup:

1. Install the Elusiv SDK from the provided tarball[^1]. (do not install the unzipped package, this will mess up the path resolution for node): 

`npm i path/to/elusiv-sdk-1.0.0.tgz`

2. Install the other dependencies:

`npm i`

3. Generate a private key (don't use a real one) and copy paste it into [`src/contants.ts`](https://github.com/elusiv-privacy/elusiv-samples/blob/main/src/constants.ts). Fund it with some devnet SOL if you want to try out the topup and sending.

(In case you don't know how to generate/format the private key, there's a helper in [`src/boilerplate.ts`](https://github.com/elusiv-privacy/elusiv-samples/blob/main/src/boilerplate.ts) you can call)

# Usage:
Call the sample you want to execute using:

`npm run <sample name>`

Currently available samples: `topup`, `send`, `txFetching`. (This README might get out of date at some point, so the topmost authority of what samples exist is still the code in `src`)

