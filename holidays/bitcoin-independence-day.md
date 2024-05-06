---
layout: event
title: "Bitcoin Independence Day"
seotitle: "What Was Bitcoin Independence Day and Why Was it Important?"
desc: "Bitcoin Independence Day was a user led movement to counter a corporate takeover attempt of bitcoin that resulted in the lock-in of Segwit."
permalink: "/bitcoin-independence-day/"
desc: "Bitcoin Independence Day was a term coined for the August 1st, 2017 plan for a user-activated soft fork (UASF) to activate Segregated Witness." 
lang: en
sitemap:
    priority: 0.7
month: Aug
monthName: August
day: 1
---

## What is Bitcoin Independence Day?

Bitcoin Independence Day was a term coined by then BTCC COO Samson Mow for the August 1st, 2017 plan for a user-activated soft fork (UASF) to activate Segregated Witness (SegWit).

The UASF would be implemented via BIP148, authored by bitcoin and litecoin developer Shaolin Fry. 

## Background of Bitcoin Independence Day

Bitcoin Independence Day (and the user-activated soft fork designed to enact it) was largely in response to the [New York Agreement](/ny-agreement/), a secret meeting among large exchanges and miners to increase the block size of the bitcoin blockchain and activating a separate incompatible version of Segwit.

<center><img alt="Bitcoin New York Agreement headline" class="box-shadow" src="/img/impasse.png" />
<div class="kb-helper">Courtesy <a href="https://www.forbes.com/sites/laurashin/2017/05/23/bitcoin-agreement-promises-to-resolve-years-long-impasse/?sh=748a1bde448d" target="_blank" rel="nofollow noopener noreferrer">Forbes</a></div>
</center>

This meeting was seen as a coordinated attack against bitcoin on the part of corporate and personal interests to turn bitcoin into something more friendly to their businesses.

Because no party in particular dictates the code that gets merged into bitcoin, it is up to various bitcoin client developers to convince users to run their code and enforce its rules against the various transactions that get broadcast to it.

The New York Agreement sought to enforce a block size increase via the miners through a hard fork, which would create a new blockchain. 

<center><img alt="Miners signal support for New York Agreement" class="box-shadow" src="/img/nya-support.png" />
<div class="kb-helper">Courtesy <a href="https://bitcoinmagazine.com/technical/miners-are-signaling-support-new-york-agreement-heres-what-means" target="_blank" rel="noopener noreferrer">Bitcoin Magazine</a> </div>
</center>

The thinking was, if most of the miners responsible for mining the blocks move over to this new chain, then those on the old chain would be forced to move over too and accept the new rules. 

Many users in the bitcoin community did not like this approach, so they developed a plan of action.

## Reasons for BIP148 and BIP149

Shaolinfry developed two BIPs to allow for a Segwit soft fork via UASF: BIP148 and BIP149.

We won't go into the differences between these two BIPs here. 

All you need to know is they both existed for the same purpose of allowing the users to merge Segwit with a soft fork that they signal with their own nodes.

The [BIP148 github summary](https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki){: target="_blank" rel="noopener noreferrer" } defines its goals as the following:

>Segwit increases the blocksize, fixes transaction malleability, and makes scripting easier to upgrade as well as bringing many other benefits. It is hoped that miners will respond to this BIP by activating segwit early, before this BIP takes effect. Otherwise this BIP will cause the mandatory activation of the existing Segwit deployment before the end of midnight November 15th 2017. 

Because of BIP91, activating Segwit required a simple majority of miners to signal support for it. 

This was, in fact, the very bargaining chip miners were using prevent Segwit in the first place.

To get around this, BIP148 would allow users to signal support for the Segwit soft fork and put miners on notice that if they did not signal support for Segwit, node runners would reject their blocks. 

After [Segwit locked in](/segwit-lock-in/), miners were given a short amount of time to "respond" (til August 1, 2017), as it were, by signaling support for BIP91. After that date (Bitcoin Independence Day), opposing miners would be left behind as [Segwit activated](/segwit-activation/).

Thankfully, it never came to that. 

Soon after BIP148 was merged, miners began signaling their support for BIP91 and Segwit transactions were supported soon after. 

<center><img alt="miners overwhelmingly signal support for BIP91" class="box-shadow" src="/img/lock-in.png" />
<div class="kb-helper">Courtesy <a href="https://bitcoinmagazine.com/technical/bip-91-has-activated-heres-what-means-and-what-it-does-not" target="_blank" rel="noopener noreferrer">Bitcoin Magazine</a> </div>
</center>

In fact, BIP148 was so successful that it never had to act on its threat, since the threat of ignoring mined blocks was so powerful it changed miner incentives to align with community.

So in that way, Bitcoin Independence Day never really actually happened. 

It didn't need to. The threat of it happening was enough!

## Why is Bitcoin Independence Day Important to bitcoin?

Bitcoin Independence Day is important because it proves that the bitcoin network cannot be dictated from the top down. 

It truly is a network run and managed by the community at large.