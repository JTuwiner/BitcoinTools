---
layout: event
title: "Lightning Whitepaper Released"
seotitle: "When was the Lightning Network Whitepaper Release Day?"
permalink: "/lightning-whitepaper/"
desc: "Lightning Network Whitepaper Day celebrates the release of the whitepaper for the Lightning Network, bitcoin's first functioning layer two scaling solution." 
lang: en
sitemap:
    priority: 0.7
month: Jan
monthName: January
day: 14
---

## What is Lightning Network Whitepaper Day?

[Lightning Network Whitepaper](https://lightning.network/docs/){: target="_blank" } Day celebrates the release of the Lightning Network Whitepaper on January 14, 2016.

It was written by Joseph Poon and Thaddeus (Tadge) Dryja.

<br>
<center><img alt="Genesis Block" src="/img/poon-dryja.png" />
</center>

## What is the Lightning Network?

Very generally, the lightning network is a second layer to the bitcoin protocol. 

The goal of the lightning network is to help scale bitcoin to accommodate a larger set of transactions at a cheaper price per transaction.

More on how the lightning network works can be [found below](/#how-the-lightning-network-works).

### Abstract to the Lightning Network Whitepaper

>The bitcoin protocol can encompass the global financial transaction volume in all electronic payment systems today, without a single custodial third party holding funds or requiring participants to have anything more than a computer using a broadband connection. A decentralized system is proposed whereby transactions are sent over a network of micropayment channels (a.k.a. payment channels or transaction channels) whose transfer of value occurs off-blockchain. If Bitcoin transactions can be signed with a new sighash type that addresses malleability, these transfers may occur between untrusted parties along the transfer route by contracts which, in the event of uncooperative or hostile participants, are enforceable via broadcast over the bitcoin blockchain in the event of uncooperative or hostile participants, through a series of decrementing timelocks.

### How the Lightning Network Works

If that was confusing, let's translate it to plain English. 

The lightning network allows users to open 'payment channels' with each other. 

You can think of these payment channels in a similar way to a tab at a bar. 

Instead of charging your credit card every time you order another drink, the bartender just adds a note to your tab listing everything you have ordered up to now.

Once you are done for the night, you pay for all of your drinks at the same time. 

Making transactions on the lightning network is similar. To open a channel, you make a transaction on the main bitcoin blockchain. From there, you credit and debit transaction between yourself and the people you have opened payment channels with. 

You can also make payments to anyone who has a channel open with people you also have channels open with.  

Once you a ready to "settle up" (to take from our bar tab example), you close the payment channel with another on-chain transaction. 

### How Lightning Network Scales Bitcoin

In this way, payments are batched together.

This makes each transaction faster and cheaper than if you did them all "on-chain". 

Because of the near-instant speed and almost free-of-cost nature of lightning network transactions, they help to scale bitcoin to a larger set of users and payment types. 

The tradeoff is that the transactions you make on the lightning network are not individually confirmed on chain and have no confirmation of any kind until you close the payment channel. 

## Why is Lightning Network Whitepaper Day Important? 

So much of the perceived value of bitcoin comes from assumption that more users will be able to use it for more and smaller transactions going forward.

The invention of the lightning network proved that second layer scaling solutions can bring us closer to making those assumptions a reality.
