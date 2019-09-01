---
layout: post
title: "LeetCode・001 − Two Sum"
ref: leetcode-1
date: 2019-01-21 21:16:00
published: false
categories: LeetCode
lang: ja
---

## 目次
- [問題](#problem)
- 解決方法
  * [Brute Force](#bf)
  * [Two-Pass Hash Table](#ht2)
  * [One-Pass Hash Table](#ht1)
- [参照](#ref)

<hr />
<br />

## 問題

定数の配列が与えられる。この配列の中には、２つの数字の合計が目標数字と同じ場合が１つある。
その２つの数字を探してインデックスを返す。

同じ要素は二度使わない。

<br />
## 解決方法
### Brute Force方法

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
### Two-Pass Hash Table方法

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
### One-Pass Hash Table方法

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
## 参照 <a id="ref"></a>
- [leetcode : solution](https://leetcode.com/problems/two-sum/solution/)
