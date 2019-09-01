---
layout: post
title: "[LeetCode] 001 - Two Sum"
ref: leetcode-1
date: 2019-01-21 21:16:00
published: false
categories: LeetCode
lang: ko
---

## 목차
- [문제](#problem)
- 풀이
  * [브루트포스](#bf)
  * [Two-Pass 해시 테이블](#ht2)
  * [One-Pass 해시 테이블](#ht1)
- [Reference](#ref)

<hr />
<br />

## 문제 <a id="problem"></a>
정수의 배열과 특정한 숫자 C가 입력으로 주어질 때, C와 같은 합이 되는 두 숫자 A와 B의 인덱스를 찾아라.

각 입력에는 오직 하나의 정답만이 존재하며, 같은 원소는 두 번 사용할 수 없다.

<br />
## 풀이
### 브루트포스 <a id="bf"></a>

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
### Two-Pass 해시 테이블 <a id="ht2"></a>

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
### One-Pass 해시 테이블 <a id="ht1"></a>

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
