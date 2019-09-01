---
layout: post
title: "[LeetCode] 001 - Two Sum"
ref: leetcode-1
date: 2019-01-21 21:16:00
published: false
categories: LeetCode
lang: en
---

## Contents
- [Problem](#problem)
- Solution
  * [Brute Force](#bf)
  * [Two-Pass Hash Table](#ht2)
  * [One-Pass Hash Table](#ht1)
- [Reference](#ref)

<hr />
<br />

## Problem <a id="problem"></a>

[001 - Two Sum](https://leetcode.com/problems/two-sum/)

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

<br />
## Solution
### Brute Force <a id="bf"></a>

``` c++
vector<int> twoSumBF(vector<int>& nums, int target)
{
	vector<int> ans;
	const size_t SIZE = nums.size();

	for(int i=0; i<SIZE-1; ++i)
	{
		for(int j=i+1; j<SIZE; ++j)
		{
			if(nums[i] + nums[j] == target)
			{
				ans.push_back(i);
				ans.push_back(j);
				return ans;
			}
		}
	}

	return ans;
}
```

<br />
### Two-Pass Hash Table <a id="ht2"></a>

```c++
vector<int> twoSumTwoPassHT(vector<int>& nums, int target) {
	map<int, int> mymap;
	vector<int> vect;

	for(int i=0; i<nums.size(); ++i)
	{
		mymap[nums[i]] = i;
	}

	for(int i=0; i<nums.size(); ++i)
	{
		int complement = target - nums[i];
		if(mymap.find(complement) != mymap.end() && mymap[complement] != i)
		{
			vector<int> temp{i, mymap[complement]};
			vect = temp;
			break;
		}
	}
	return vect;
}
```

<br />
### One-Pass Hash Table <a id="ht1"></a>

```c++
vector<int> twoSumOnePassHT(vector<int>& nums, int target) {
	map<int, int> mymap;
	vector<int> vect;

	for(int i=0; i<nums.size(); ++i)
	{
		int complement = target - nums[i];

		if(mymap.find(complement) != mymap.end())
		{
			vector<int> temp{mymap[complement], i};
			vect = temp;
			break;
		}
		mymap[nums[i]] = i;
	}
	return vect;
}
```

<br />
## Reference <a id="ref"></a>
- [leetcode : solution](https://leetcode.com/problems/two-sum/solution/)
