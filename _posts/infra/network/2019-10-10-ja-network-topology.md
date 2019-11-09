---
layout: post
title: "ネットワーク・トポロジー"
ref: network-topology
date: 2019-10-10 07:00:00
categories: Network
published: false
tags: network
lang: ja
---

## 目次
- [ネットワーク・トポロジーとは](#start)
- トポロジー
  1. [Busトポロジー](#bus)
  2. [Starトポロジー](#star)
  3. [Meshトポロジー](#mesh)
  4. [Ringトポロジー](#ring)
- [Segments and Backbones](#cable)

<hr>
<br>

## トポロジーとは? <a id="start"></a>
**Network トポロジー** is an arragement of networks connecting various nodes (sender and receiver) either physically or logically.
There are many different topologies but we will look at the four basic topologies: _BUS_, _Star_, _Mesh_, and _Ring_.

<br>

## BUSトポロジー <a id="bus"></a>
![BUSトポロジー](/assets/images/infra/network/bus.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage
    1. Less cost
    2. Easy Installation
    3. Most Economical Choice
  + Disadvantage
    1. Difficulty Troubleshooting
    2. More traffic -> Slower network
    3. Not scalable

<br>

## Starトポロジー <a id="star"></a>
![Starトポロジー](/assets/images/infra/network/star.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. Centralization 
    2. Easy to make a change
  + Disadvantage
    1. Problem with the hub -> whole network dies
    2. Expensive

<br>

## Meshトポロジー <a id="mesh"></a>
![Meshトポロジー](/assets/images/infra/network/mesh.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. Fault Tolerance
  + Disadvantage
    1. Hard to administer and manage
    2. Expensive 

<br>

## Ringトポロジー <a id="ring"></a>
![Ringトポロジー](/assets/images/infra/network/ring.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. All machines have equall access to the network
    2. Provide good performance for the workstation
    3. Signal degeneration is slow
  + Disadvantage
    1. One is broken -> whole network breaks down
    2. Difficult to make a change 
      - (not that its difficult but brief disconnection of a one cable breaks the whole network)

<br>

## Segments and Backbones <a id="cable"></a>
- Segments
  1. Actual physical cable segment
  2. logical segment with networking

- Backbone
  + main cable segment in the network
