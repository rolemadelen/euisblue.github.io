---
category: etc
url_path: '/gist'
title: "I'm an early bird? night owl?"
type: 'etc'

layout: null
---

### Productive Box

GitHub action을 이용한 흥미로운 프로젝트. 

![Productive Box](./images/etc/productive-box.png)

위 그림과 같이 자정에 한 번 cron을 통해 나의 commit 정보와 시간대를 가져와 night-owl인지 early-bird인지 판별해준다.

### Setup

#### 사전 작업
1. [gist](https://gist.github.com/) 생성하기. 제목과 내용은 아무렇게나 해도 상관없다.
2. 토큰 [생성하기](https://github.com/settings/tokens/new).
  + `repo`와 `gist`부분을 체크. 
  + 해당 토큰은 나중에 사용하니 잘 저장해놓자.

#### 프로젝트 적용하기
1. [Productive Box](https://github.com/maxam2017/productive-box)를 fork한다.
2. fork한 repository의 "Actions" 탭으로 이동한 후 work-flow를 enable 해준다.
3. repository의 `.github/workflows/schedule.yml`에서 환경 변수 설정하기.
  + **GIST ID**: 사전작업에서 만든 gist로 들어가서 URL을 살펴보자. `https://gist.github.com/jioneeu/<THIS>` *THIS* 부분의 숫자를 복붙한다.
  + **TIMEZONE**: `cron`이 특정 시간대에 주기적으로 갱신한다. 현재 자신이 있는 지역과 설정된 로케일이 다르면 불편할 수 있으니, 제대로 설정해주자. 일본에 있다면 `Asia/Tokyo`, 뉴욕에 있으면 `America/New_York`, 등등..
4. fork한 repository의 **Settings → Secrets**으로 이동.
5. **GH_TOKEN**이라는 이름의 환경 변수를 생성한다. 사전작업에서 생성한 토큰값을 사용.
6. 해당 gist를 홈에서 pin 해준다.