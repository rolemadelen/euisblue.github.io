---
layout: post
title: "네트워크 토폴로지(Topology)"
ref: network-topology
date: 2019-10-10 07:00:00
categories: Network
published: false
tags: network
lang: ko
---

## 목차
- [네트워크 토폴로지란?](#start)
- Types of Topologies
  1. [Bus 토폴로지](#bus)
  2. [Star 토폴로지](#star)
  3. [Mesh 토폴로지](#mesh)
  4. [Ring 토폴로지](#ring)
- [세그먼트와 백본](#cable)

<hr>
<br>

## 네트워크 토폴로지란? <a id="start"></a>
**네트워크 토폴로지** is an arragement of networks connecting various nodes (sender and receiver) either physically or logically.
There are many different topologies but we will look at the four basic topologies: _BUS_, _Star_, _Mesh_, and _Ring_.

<br>

## BUS 토폴로지 <a id="bus"></a>
![BUS 토폴로지](/assets/images/infra/network/bus.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage
    1. Less cost
    2. Easy Installation
    3. Most Economical Choice
  + Disadvantage
    1. Difficulty Troubleshooting
    2. More traffic -> Slower network
    3. Not scalable

<br>

## Star 토폴로지 <a id="star"></a>
![Star 토폴로지](/assets/images/infra/network/star.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. Centralization 
    2. Easy to make a change
  + Disadvantage
    1. Problem with the hub -> whole network dies
    2. Expensive

<br>

## Mesh 토폴로지 <a id="mesh"></a>
![Mesh 토폴로지](/assets/images/infra/network/mesh.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. Fault Tolerance
  + Disadvantage
    1. Hard to administer and manage
    2. Expensive 

<br>

## Ring 토폴로지 <a id="ring"></a>
![Ring 토폴로지](/assets/images/infra/network/ring.jpg) [https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/](https://www.comparitech.com/net-admin/network-topologies-advantages-disadvantages/)

  + Advantage 
    1. All machines have equall access to the network
    2. Provide good performance for the workstation
    3. Signal degeneration is slow
  + Disadvantage
    1. One is broken -> whole network breaks down
    2. Difficult to make a change 
      - (not that its difficult but brief disconnection of a one cable breaks the whole network)

<br>

## 세그먼트와 백본 <a id="cable"></a>
- Segments
  1. Actual physical cable segment
  2. logical segment with networking

- Backbone
  + main cable segment in the network
