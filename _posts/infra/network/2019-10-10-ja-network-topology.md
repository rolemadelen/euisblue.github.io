---
layout: post
title: "ネットワークトポロジー"
ref: network-topology
date: 2019-10-10 07:00:00
categories: Network
published: false
tags: network
lang: ja
---

## Contents
- [Network Topology](#start)
- Types of Topologies
  1. [Bus Topology](#bus)
  2. [Star Topology](#star)
  3. [Mesh Topology](#mesh)
  4. [Ring Topology](#ring)
- [Segments and Backbones](#cable)

<hr>
<br>

## What is Network Topology? <a id="start"></a>
**Network Topology** is an arragement of networks connecting various nodes (sender and receiver) either physically or logically.
There are many different topologies but we will look at the four basic topologies: _BUS_, _Star_, _Mesh_, and _Ring_.

<br>

## BUS Topology <a id="bus"></a>
![BUS Topology](/assets/images/infra/network/bus.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage
    1. Less cost
    2. Easy Installation
    3. Most Economical Choice
  + Disadvantage
    1. Difficulty Troubleshooting
    2. More traffic -> Slower network
    3. Not scalable

<br>

## Star Topology <a id="star"></a>
![Star Topology](/assets/images/infra/network/star.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. Centralization 
    2. Easy to make a change
  + Disadvantage
    1. Problem with the hub -> whole network dies
    2. Expensive

<br>

## Mesh Topology <a id="mesh"></a>
![Mesh Topology](/assets/images/infra/network/mesh.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. Fault Tolerance
  + Disadvantage
    1. Hard to administer and manage
    2. Expensive 

<br>

## Ring Topology <a id="ring"></a>
![Ring Topology](/assets/images/infra/network/ring.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

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