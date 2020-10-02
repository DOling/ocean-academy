# Chapter 14: Ocean Market and Ocean Protocol Infrastructure
#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="mantaray">In the depths of the ocean, nobody knows you’re a fish. Meet the main characters in the Web3 data ecosystem that Ocean Protocol is buidling.</dialog>

Now that you are familiar with the Ocean let’s explore the Marketplace from Ocean Protocol.
As we’ve seen in early chapters current data marketplaces have three main issues: centralized control which requires the data publisher to trust the marketplace operator, loss of privacy and difficulty in determining price.

<img src="/images/chapter14_0.png" />

Ocean Market, the reference marketplace provided by Ocean Protocol, addresses these issues.

It makes it easy to publish data services, provide accurate pricing for the data, discover data, purchase data, and consume data services.
Ocean Market supports fixed pricing and automatic price discovery for your assets (datasets and algorithms). We’ll see more on that later.

It’s a vendor-neutral reference data marketplace for use by the Ocean community. It’s decentralized (no single owner or controller), and non-custodial (only the data owner holds the keys for the datatokens).
Developers and entrepreneurs are free to fork Ocean Market to build their own data marketplaces.

Everyone at Ocean Protocol hopes that there will be thousands of data marketplaces and that Ocean Market will be just one among many. Each Ocean-powered marketplace will have the same features as the reference implementation provided by Ocean Protocol, plus any feature they will want to add.

**Let’s explore Ocean Marketplace to understand more in depth the Ocean Protocol 3 layers stack.**

<img src="/images/chapter14_1.png" />

The Buyer interacts with the frontends including Ocean Market, or with any independent third-party markets connected to Ocean Protocol.
Front-end UIs, usually running in the browser, are connected to the Ocean Protocol backend with Ocean React hooks and Ocean JS library. Think of Ocean React hooks as the glue for your frontend and the backend.
The Decentralized Backend is Solidity code running on Ethereum mainnet, which includes the libraries and tools we covered before like access smart contracts and the on-chain metadata store.

From an infrastructure standpoint, Ocean marketplaces are what end-users interact with. They are supported by Ocean Protocol libraries and tools and enabled by an array of smart contracts in the Ethereum blockchain.

<img src="/images/chapter14_2.png" />

**Layer 3 — Apps ecosystem (marketplaces, data management platforms)**
This is effectively the services and the UI that people interact with for their data exchanges. A marketplace/publisher app, typically running in a web browser.

**Layer 2 — Component level (Ocean metadata storage, Ocean proxy, libraries)**
The Ocean middleware solution sits in between. Datasets and their metadata are registered and validated here. It includes all the high-level libraries to interact with Ocean Protocol, and the components enabling the integration of your data with Ocean Protocol.

**Layer 1 — Network level (EVM nodes and smart contracts)**
This is the foundational layer. The ledger records data ownership and access rights.
Ocean Protocol smart contracts on the Ethereum Virtual Machine interact with each other to deal with data properties and rights and facilitate secure data exchange.